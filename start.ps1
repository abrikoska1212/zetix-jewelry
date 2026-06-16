$host.UI.RawUI.WindowTitle = "ZETIX — Luxury Jewelry"
Set-Location $PSScriptRoot
Write-Host ""
Write-Host "  ZETIX — Luxury Jewelry" -ForegroundColor Yellow
Write-Host "  http://localhost:3000" -ForegroundColor DarkGray
Write-Host ""
npm run dev
Read-Host "`nНажмите Enter для закрытия"
