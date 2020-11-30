cd ..
@echo on

echo npm run build
call npm run build

echo npx cap init component-library-native ru.eltech --web-dir dist
call npx cap init component-library-native ru.eltech --web-dir dist

echo npx cap add android
call npx cap add android

echo npm run build
call npm run build

echo npx cap copy
call npx cap copy
