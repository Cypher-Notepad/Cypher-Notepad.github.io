
# Installation for v2.1

!> **This installation guide is for version 2.1**. We highly recommend you to install the latest version of Cypher Notepad.

## Windows

* **Requirement: Java Runtime Environment (JRE) 1.8 or higher** 
* If you have JRE (recommended 1.8) on your device, [download this](https://github.com/Cypher-Notepad/Cypher-Notepad/releases/download/v2.1/Cypher.Notepad.exe). 
* Or [download another version](https://github.com/Cypher-Notepad/Cypher-Notepad/releases/download/v2.1/Cypher.Notepad.Setup.bundled.JRE.exe) with bundled JRE 1.8.  
* You can also download JRE 1.8 separately by yourself [here](https://www.oracle.com/java/technologies/javase-jre8-downloads.html). (But we highly recommend downloading the bundled JRE version which is minimized to fit the program.) 

(2020-05-28, Version 2.1.0.0; @LeeDongGeon1996)

## Linux

* **Requirement: Java Runtime Environment (JRE) 1.8 or higher**
* Download [this debian package](https://github.com/Cypher-Notepad/Cypher-Notepad/releases/download/v2.1/cypher-notepad-2.1-linux.deb) and run.
* Or you also can install by running these terminal commands: 

```
wget https://github.com/Cypher-Notepad/Cypher-Notepad/releases/download/v2.1/cypher-notepad-2.1-linux.deb
sudo dpkg -i cypher-notepad-2.1-linux.deb
echo "alias cypher-notepad='bash /opt/CypherNotepad/CypherNotepadLauncher'" >> ~/.bashrc 
source ~/.bashrc
```

* **(Optional)** Create a shortcut in the home directory: 

```
cp /opt/CypherNotepad/CypherNotepad.desktop ${HOME}/CypherNotepad.desktop
sudo chmod 755 ${HOME}/CypherNotepad.desktop
```

* **(Optional)** You can remove `bundled JRE` in the package in order to save memory or change the version (default 1.8) used for launching Cypher Notepad. Make sure JRE is installed.

```
bash /opt/CypherNotepad/scripts/remove_bundled_jre.sh
```
 (2020-07-02, Version 2.1.0.0; @LeeDongGeon1996)


## MacOS

Sorry, Not supported in this version.
