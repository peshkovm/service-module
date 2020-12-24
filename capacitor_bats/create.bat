cd ..
@echo on

echo npm run build
call npm run build

echo npx cap init appsTimesStamps ru.eltech.appsTimesStamps --web-dir dist
call npx cap init appsTimesStamps ru.eltech.appsTimesStamps --web-dir dist

echo npx cap add android
call npx cap add android

echo npm run build
call npm run build

echo npx cap copy
call npx cap copy
