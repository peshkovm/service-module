cd ..
@echo on

echo npm run build
call npm run build

echo npx cap copy
call npx cap copy
