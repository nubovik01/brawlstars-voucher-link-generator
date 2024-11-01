# Voucher code link generator for Brawl Stars

# original

https://github.com/RomashkaTea/brawlstars-voucher-link-generator

## screenshots

![screenshot](screenshot.png?raw=true)

## install node (on macos/windows)

1. download node.js: https://nodejs.org/en
2. restart your pc or reopen vsc & terminal with admin rights

## install node (on arch linux)

```bash
sudo pacman -S --needed base-devel git
git clone https://aur.archlinux.org/nvm.git ~/nvm
cd ~/nvm
makepkg -si
```

## install node (on ubuntu)

```bash
sudo apt update
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.profile
nvm install node
```

## install dependencies

```bash
npm i
```

## usage

```bash
node .
```
