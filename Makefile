VERSION=$(shell scripts/obtenerVersion.sh)
NOMBRE="pilas-bloques"


N=[0m
G=[01;32m
Y=[01;33m
B=[01;34m
L=[01;30m

npm_config_loglevel="warn"

comandos:
	@echo ""
	@echo "${B}Comandos disponibles para ${G}pilas-bloques${N} - ${Y} versión ${VERSION}${N}"
	@echo ""
	@echo "  ${Y}Para desarrolladores${N}"
	@echo ""
	@echo "    ${G}iniciar${N}         Instala dependencias."
	@echo "    ${G}compilar${N}        Genera los archivos compilados."
	@echo "    ${G}compilar_live${N}   Compila de forma contínua."
	@echo "    ${G}compilar_web${N}    Genera la aplicación para la versión web (desde un iframe)."
	@echo ""
	@echo "    ${G}ejecutar_linux${N}  Prueba la aplicacion sobre Huayra."
	@echo "    ${G}ejecutar_mac${N}    Prueba la aplicacion sobre OSX."
	@echo "    ${G}run${N}    Correr en entorno de desarrollo usando ember serve."
	@echo ""
	@echo "    ${G}utest${N}            Ejecuta las pruebas de forma continua."
	@echo ""
	@echo ""
	@echo "  ${Y}Para desarrolladores (avanzadas)${N}"
	@echo ""
	@echo "    ${G}bajar_dependencias${N}              Descarga las dependencias pilas y blockly."
	@echo "    ${G}vincular_dependencias${N}           Vincula las dependencias."
	@echo "    ${G}actualizar_pilas${N}                Vincula pilasweb."
	@echo "    ${G}actualizar_blockly${N}              Actualiza blockly."
	@echo "    ${G}actualizar_ejercicios_pilas${N}     Actualiza los ejercicios de pilas."
	@echo "    ${G}copiar_blockly_comprimido${N}       Vincula blockly al proyecto."
	@echo "    ${G}copiar_blockly_descomprimido${N}    Vincula blockly al proyecto."
	@echo ""
	@echo "    ${L}Estos suelen ser los comandos iniciales a ejecutar (sync):${N}"
	@echo "${L}"
	@echo "        iniciar → bajar_dependencias → vincular_dependencias → "
	@echo "        actualizar_pilas → actualizar_blockly →"
	@echo "        actualizar_ejercicios_pilas"
	@echo "        "
	@echo "           (o bien "make full")"
	@echo "${N}"
	@echo ""
	@echo "  ${Y}Para distribuir${N}"
	@echo ""
	@echo "    ${G}version${N}           Genera una nueva versión (alias de version_patch)."
	@echo "    ${G}version_patch${N}     Genera una nueva versión (0.0.PATCH)."
	@echo "    ${G}version_minor${N}     Genera una nueva versión (0.MINOR.0)."
	@echo "    ${G}version_major${N}     Genera una nueva versión (MAJOR.0.0)."
	@echo ""
	@echo "    ${G}binarios_electron${N}              Genera los binarios."
	@echo "    ${G}binarios (EN DESUSO)${N}           Genera los binarios."
	@echo "    ${G}subir_a_dropbox (EN DESUSO)${N}    Sube los binarios generados a dropbox."
	@echo ""


iniciar:
	@echo "${G}instalando dependencias ...${N}"
	@npm install
	bower install --allow-root

vincular_dependencias:
	@echo "${G}vinculando depenrencias ...${N}"
	rm -f pilasweb blockly ejerciciosPilas
	ln -s ../pilasweb
	ln -s ../blockly
	ln -s ../ejerciciosPilas

bajar_dependencias:
	python scripts/bajar_dependencias.py

actualizar_pilas:
	@echo "${G}actualizando pilasweb${N}"
	@echo " ${L}(esto puede demorar)${N}"
	cd pilasweb; npm install; git pull; make build; cd ..
	rm -r -f public/libs/data
	mkdir -p public/libs/
	make copiar_pilasweb
	@echo "${Y}CUIDADO, tienes que llamar a actualizar_ejercicios_pilas también!!!${N}"

copiar_pilasweb:
	@echo "${G}copiando pilasweb${N}"
	cp -r -f pilasweb/public/data public/libs/
	cp -r -f pilasweb/public/pilasweb.js public/libs/

actualizar_ejercicios_pilas:
	@echo "${G}actualizando ejercicios de pilas${N}"
	@cd ejerciciosPilas; git pull; echo "${G}Instalando dependencias de ejerciciosPilas${N}"; npm install; cd ..
	@cd ejerciciosPilas; echo "${G}Compilando ejerciciosPilas${N}"; grunt; cd ..
	make copiar_ejercicios_pilas

copiar_ejercicios_pilas:
	@echo "${G}copiando ejerciciosPilas${N}"
	cp -r -f ejerciciosPilas/compilados/ejerciciosPilas.js public/libs/
	rm -r -f public/libs/data
	cp -r -f ejerciciosPilas/src/data public/libs/data

actualizar_blockly:
	cd blockly; git pull; python build.py; cd ..
	rm -rf vendor/libs/blockly
	mkdir -p vendor/libs/blockly
	make copiar_blockly_comprimido


copiar_blockly_comprimido:
	# CORE
	cp -f blockly/blockly_compressed.js vendor/libs/blockly/
	# BLOCKS
	cp -f blockly/blocks_compressed.js vendor/libs/blockly/
	# JS GENERATOR
	cp -f blockly/javascript_compressed.js vendor/libs/blockly/
	# MEDIA
	rm -r -f public/libs/blockly/media
	cp -r -f blockly/media public/libs/blockly/
	# LANG
	rm -r -f vendor/libs/blockly/msg
	cp -r -f blockly/msg  vendor/libs/blockly/

copiar_blockly_descomprimido:
	# CORE
	cp -f blockly/blockly_uncompressed.js public/libs/blockly/
	rm -r -f public/libs/blockly/core
	cp -r -f blockly/core public/libs/blockly/
	# BLOCKS
	rm -r -f public/libs/blockly/blocks
	cp -r -f blockly/blocks public/libs/blockly/blocks
	# JS GENERATOR
	rm -r -f public/libs/blockly/generators
	mkdir public/libs/blockly/generators
	cp -f blockly/generators/javascript.js public/libs/blockly/generators/
	cp -r -f blockly/generators/javascript public/libs/blockly/generators/
	# MEDIA
	rm -r -f public/libs/blockly/media
	cp -r -f blockly/media public/libs/blockly/
	# LANG
	rm -r -f public/libs/blockly/msg
	cp -r -f blockly/msg  public/libs/blockly/

descartar_todo_cambio:
	cd pilas; git checkout .
	cd ejerciciosPilas; git checkout .
	git checkout .

dist: compilar

ejecutar_linux:
	nw dist

ejecutar_mac:
	/Applications/nwjs.app/Contents/MacOS/nwjs dist

utest:
	./node_modules/ember-cli/bin/ember nw:test --server

test_mac: ejecutar_mac

build: compilar

compilar: actualizar_pilas actualizar_ejercicios_pilas
	cd scripts; python generarListaImagenes.py
	./node_modules/ember-cli/bin/ember build

compilar_todo_pilas:
	cd ../pilasweb; make build
	cd ../ejerciciosPilas; grunt
	make compilar

compilar_todo_y_testear:
	cd ../pilasweb; make build
	cd ../ejerciciosPilas; grunt
	make copiar_pilasweb
	make copiar_ejercicios_pilas
	./node_modules/ember-cli/bin/ember test --server

compilar_web:
	./node_modules/ember-cli/bin/ember build --environment=web --output-path dist_web

compilar_live:
	./node_modules/ember-cli/bin/ember build --watch

version: version_patch

version_patch:
	ember release

version_minor:
	ember release --minor

version_major:
	ember release --major

release: version


limpiar_todo:
	@echo "Limpiando bibliotecas..."
	@echo "(se reinstalarán a continuación)"
	@sleep 5s;
	@rm -rf node_modules/ bower_components/

full: limpiar_todo iniciar bajar_dependencias vincular_dependencias actualizar_pilas actualizar_blockly actualizar_ejercicios_pilas

to_production:
	@echo "${G}pasando a modo produccion${N}"
	cp public/package.produccion.json public/package.json

to_develop:
	@echo "${G}pasando a modo desarrollo.${N}"
	cp public/package.desarrollo.json public/package.json

_compile_osx:
	make to_production
	mkdir -p webkitbuilds
	rm -r -f tmp
	mkdir -p tmp
	cd tmp
	cp ~/Dropbox/releases/pilas-engine-bloques-template.zip tmp/
	unzip tmp/pilas-engine-bloques-template.zip -d tmp/ > log_descompresion.log
	rm -r -f tmp/__*
	mv tmp/pilas-engine-bloques-template.app tmp/pilas-bloques.app
	rm tmp/pilas-engine-bloques-template.zip
	cp -r dist/* tmp/pilas-engine-bloques.app/Contents/Resources/app.nw/
	mkdir tmp/pilas-engine-bloques.app/Contents/Resources/app.nw/node_modules
	cp -R node_modules/compare-version tmp/pilas-engine-bloques.app/Contents/Resources/app.nw/node_modules/
	hdiutil create tmp/pilas-bloques-${VERSION}.dmg -srcfolder ./tmp/pilas-engine-bloques.app -size 200mb
	mv tmp/pilas-bloques-${VERSION}.dmg webkitbuilds/
	rm -r -f tmp
	make to_develop

_compile_win:
	make to_production
	mkdir -p webkitbuilds
	rm -r -f tmp
	mkdir -p tmp
	cp ~/Dropbox/releases/pilas-engine-bloques-windows-template.zip tmp/
	unzip tmp/pilas-engine-bloques-windows-template.zip -d tmp/ > log_descompresion.log
	rm -r -f tmp/__*
	cp -r -f dist/* tmp/nwjs
	mkdir tmp/nwjs/node_modules
	cp -R node_modules/compare-version tmp/nwjs/node_modules/
	cp extras/instalador.nsi tmp/nwjs
	cd tmp/nwjs; makensis instalador.nsi
	mv tmp/nwjs/pilas-bloques.exe webkitbuilds/pilas-bloques-${VERSION}.exe
	make to_develop

binarios: to_production build _compile_osx _compile_win
	@echo "Mostrando el directorio resultado"
	@open webkitbuilds
	make to_develop

subir_a_dropbox:
	@echo "OJO, los archivos no se subirán a dropbox."
	@echo "Ahora se sube a static.pilas-engine.com.ar"
	mkdir -p ~/Dropbox/Public/releases/pilas-engine-bloques/${VERSION}/
	mv webkitbuilds/pilas-bloques-${VERSION}.dmg ~/Dropbox/Public/releases/pilas-engine-bloques/${VERSION}/
	mv webkitbuilds/pilas-bloques-${VERSION}.exe ~/Dropbox/Public/releases/pilas-engine-bloques/${VERSION}/
	scp -r ~/Dropbox/Public/releases/pilas-engine-bloques/${VERSION} root@162.243.50.192:/home/hugoruscitti/static.pilas-engine.com.ar/pilas-engine-bloques/

run:
	@echo "${G}Iniciando ember ...${N}"
	./node_modules/ember-cli/bin/ember serve

binarios_electron: build _preparar_electron _compilar_electron_osx _compilar_electron_win32

_preparar_electron:
	@echo "${G}Preparando directorio dist para funcionar con electron...${N}"
	@cp extras/electron.js dist
	@cp extras/package.json dist

_compilar_electron_osx:
	@echo "${G}Iniciando compilación a electron a OSX...${N}"
	rm -f tmp/pilas-bloques-${VERSION}.dmg
	node_modules/.bin/electron-packager dist "pilasBloques" --app-version=${VERSION} --platform=darwin --arch=all --version=0.37.6 --ignore=node_modules --ignore=bower_components --out=binarios --overwrite --icon=extras/icono.icns
	hdiutil create tmp/pilas-bloques-${VERSION}.dmg -srcfolder ./binarios/pilasBloques-darwin-x64/pilasBloques.app -size 200mb


_compilar_electron_win32:
	@echo "${G}Iniciando compilación a electron a Windows...${N}"
	node_modules/.bin/electron-packager dist "pilasBloques" --app-version=${VERSION} --platform=win32 --arch=ia32 --version=0.37.6 --ignore=node_modules --ignore=bower_components --out=binarios --overwrite --icon=extras/icono.ico
	@echo "${G}Generando instalador para windows...${N}"
	cp extras/instalador.nsi binarios/pilasBloques-win32-ia32/
	cd binarios/pilasBloques-win32-ia32/; makensis instalador.nsi
	mv binarios/pilasBloques-win32-ia32/pilas-bloques.exe tmp/pilas-bloques-${VERSION}.exe
	
	


.PHONY: dist bajar_dependencias
