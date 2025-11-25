@echo off
setlocal
set SCRIPT_DIR=%~dp0
if "%SCRIPT_DIR:~-1%"=="\" set SCRIPT_DIR=%SCRIPT_DIR:~0,-1%
set WRAPPER_DIR=%SCRIPT_DIR%\.mvn\wrapper
set WRAPPER_JAR=%WRAPPER_DIR%\maven-wrapper.jar

if not exist "%WRAPPER_DIR%" (
  mkdir "%WRAPPER_DIR%"
)

if not exist "%WRAPPER_JAR%" (
  echo Downloading maven wrapper jar...
  powershell -NoProfile -Command "Invoke-WebRequest -Uri 'https://repo1.maven.org/maven2/io/takari/maven-wrapper/0.5.6/maven-wrapper-0.5.6.jar' -OutFile '%WRAPPER_JAR%'"
)

java -cp "%WRAPPER_JAR%" -Dmaven.multiModuleProjectDirectory="%SCRIPT_DIR%" org.apache.maven.wrapper.MavenWrapperMain %*
endlocal