@echo off
title ZETIX — Luxury Jewelry
cd /d "%~dp0"
echo.
echo   ZETIX — Luxury Jewelry
echo   http://localhost:3000
echo.
call npm run dev
if errorlevel 1 (
    echo.
    echo   [ОШИБКА] Сервер не запустился
    echo.
)
pause
