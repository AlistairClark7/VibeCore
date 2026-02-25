#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

WORKDIR /src
COPY ["EasyAspCoreReactTemplate/EasyAspCoreReactTemplate.csproj", "EasyAspCoreReactTemplate/"]
RUN dotnet restore "EasyAspCoreReactTemplate/EasyAspCoreReactTemplate.csproj"
COPY . .

WORKDIR /src/EasyAspCoreReactTemplate/EasyAspCoreReactTemplate
RUN dotnet build "EasyAspCoreReactTemplate.csproj" -c Release -o /app/build
WORKDIR /src/EasyAspCoreReactTemplate/ClientApp
RUN npm install
RUN npm run build

FROM build AS publish
WORKDIR /src/EasyAspCoreReactTemplate
RUN dotnet publish "EasyAspCoreReactTemplate.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "EasyAspCoreReactTemplate.dll"]