Iniciar o package.json para preparar o ambiente (-y to give yes for all options)

# npm init -y

Instalar o babel para enviar o código antigo para o navegador

# npm install --save-dev @babel/cli @babel/preset-env @babel/core

OBS: Quando for depedência (--save-dev) é só para o próprio projeto e quem for roda o projeto não vai precisar instalar o babel também.

Colocar o .gitingnore na raíz do projeto e colocar quais arquivos eu não quero que suba para o Github.

Cria o arquivo bundle.js

# npx babel main.js -o bundle.js --presets=@babel/env

Colocar o script do bundle no HTML 

Incluir uma nova opção no package.json, para atualizar automaticamente (-w is to watch)

# "babel": "babel ./main.js -o ./bundle.js --presets=@babel/env -w"

