### ci требует фикса.
# упущенные строчки:
*      - name: build production project
*        run: npm run build:prod
*      - name: unit testing
*        run: npm run test:unit
*      - name: build storybook
*        run: npm run storybook:build
*      - name: screenshot testing
*        run: npm run test:ui:ci

# причина - падает сборка вебпака на импортах, но на локале все хорошо.
