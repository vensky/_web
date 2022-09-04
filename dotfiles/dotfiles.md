```
#!/usr/bin/env bash

# ~/.macos — https://vensky.github.com

# Close any open System Preferences panes, to prevent them from overriding
# settings we’re about to change
osascript -e 'tell application "System Preferences" to quit'

# Ask for the administrator password upfront
sudo -v

# Keep-alive: update existing `sudo` time stamp until `.macos` has finished
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# GENERAL
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

# System Preferences > Sharing > Computer Name
sudo scutil --set ComputerName "macbook"
sudo scutil --set HostName "macbook"
sudo scutil --set LocalHostName "macbook"
sudo defaults write /Library/Preferences/SystemConfiguration/com.apple.smb.server NetBIOSName -string "macbook"

# GENERAL # # # # # # # # # # # # # # # # # # # # # # # # # #
###############################################################################
# General UI/UX                                                               #
###############################################################################

# Set computer name (as done via System Preferences → Sharing)


# Disable the sound effects on boot
sudo nvram SystemAudioVolume=" "

###############################################################################
# Trackpad & mouse                                                            #
###############################################################################

# Trackpad: enable tap to click for this user and for the login screen
defaults write com.apple.driver.AppleBluetoothMultitouch.trackpad Clicking -bool true
defaults -currentHost write NSGlobalDomain com.apple.mouse.tapBehavior -int 1
defaults write NSGlobalDomain com.apple.mouse.tapBehavior -int 1

# Disable “natural” (Lion-style) scrolling
defaults write NSGlobalDomain com.apple.swipescrolldirection -bool false

# Show language menu in the top right corner of the boot screen
sudo defaults write /Library/Preferences/com.apple.loginwindow showInputMenu -bool true

###############################################################################
# Finder                                                                      #
###############################################################################

# Finder: show all filename extensions
defaults write NSGlobalDomain AppleShowAllExtensions -bool true

# Finder: show status bar
defaults write com.apple.finder ShowStatusBar -bool true

# Finder: show path bar
defaults write com.apple.finder ShowPathbar -bool true

# Display full POSIX path as Finder window title
defaults write com.apple.finder _FXShowPosixPathInTitle -bool true

# Keep folders on top when sorting by name
defaults write com.apple.finder _FXSortFoldersFirst -bool true

###############################################################################
# Dock, Dashboard                                                             #
###############################################################################
# Set the icon size of Dock items to 24 pixels
defaults write com.apple.dock tilesize -int 24

# Show indicator lights for open applications in the Dock
defaults write com.apple.dock show-process-indicators -bool true

# Minimize windows into their application’s icon
defaults write com.apple.dock minimize-to-application -bool true

# Don’t show recent applications in Dock
defaults write com.apple.dock show-recents -bool false

# Add a spacer to the left side of the Dock (where the applications are)
defaults write com.apple.dock persistent-apps -array-add '{tile-data={}; tile-type="spacer-tile";}'

# Add a spacer to the right side of the Dock (where the Trash is)
defaults write com.apple.dock persistent-others -array-add '{tile-data={}; tile-type="spacer-tile";}'

###############################################################################
# App                                                                         #
###############################################################################
# cd ~/Library/Fonts && { curl -O 'https://github.com/vensky/dotfiles/fonts/jetbrainsmomo/.TTF' ; cd -; }

# Install Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
# curl --proto https --tlsv1.2 https://raw.githubusercontent.com/Homebrew/install/master/install.sh

brew install node
brew install git
npm i gulp -g
brew install --cask alfred
brew install --cask appcleaner
brew install --cask bitwarden
brew install --cask cacher
brew install --cask figma
brew install --cask firefox
brew install --cask flux
brew install --cask google-chrome
brew install --cask ilya-birman-typography-layout
brew install --cask imageoptim
brew install --cask inkscape
brew install --cask iterm2
brew install --cask karabiner-elements
brew install --cask keka
brew install --cask responsively
brew install --cask sublime-text
brew install --cask telegram
brew install ffmpeg
brew install imagemagick
brew install ngrok
brew install woff2 sfnt2woff-zopfli
brew tap bramstein/webfonttools
npm install -g browser-sync
npm install -g glyphhanger

# Setup iCloud

# Setup keyboard input, setup Karabiner (CapsLock to F19)
# Keyboard - Text - "Correct spelling automatically": Disable
# Keyboard - Text - "Capitalize words automatically": Disable
# Keyboard - Text - "Smart quotes and dashes": Disable
# Keyboard - Input Sources
# Mouse - Scroll direction

# General - Show scroll bars - Always

# Notifications - Disable
# Clean dock & Launchpad
# Show date and sound in menu bar

# Finder: Preferences - General - "New Finder window show:": Downloads
# Finder: Preferences - Tags - Disable
# Finder: Preferences - Sidebar - "Movies", "Music", "Pictures", "iCloud Drive", "CDs", "Tags": Disable
# Finder: Preferences - Advanced - "Keep folders on top:": In windows when sorting by name
# Finder Sort by NAme

# Dock - To Left
# Dock - Show recent applications in dock: Disable

# Accessibility - Use scroll geture with modifier keys to zoom: Enable
# Accessibility - Smooth images: Disable

# Make zsh aliases
```
