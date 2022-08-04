<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://github.com/sharkdp/bat">Bat</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/catppuccin/bat/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/bat?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/bat/issues"><img src="https://img.shields.io/github/issues/catppuccin/bat?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/bat/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/bat?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/bat/main/assets/preview.png"/>
</p>

## Adding the themes

1. Clone this repository. 
2. First create a theme folder in bat's configuration directory by running:
    ```bash
	mkdir -p "$(bat --config-dir)/themes"
	```
3. Copy all the `.tmTheme` files from the cloned folder to bat's theme folder:
	```bash
	cp *.tmTheme "$(bat --config-dir)/themes"
	```
4. Rebuild bat's cache:
   ```bash
   bat cache --build
   ```
5. Run `bat --list-themes` and check if all the 4 theme flavours are present in the list. 
## Usage 

There are two ways to get the theme working. 
1. Add the following to bat's configuration file:
	```bash
	--theme="Catppuccin-mocha"
	```
2. Using the `BAT_THEME` environmental variable:
   - Export the environmental variable inside your shell's configuration file: `BAT_THEME="Catppuccin-mocha"`. The method to export the variable depends on your shell. 




## 💝 Thanks to

- [ghostx31](https://github.com/ghostx31)

&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
