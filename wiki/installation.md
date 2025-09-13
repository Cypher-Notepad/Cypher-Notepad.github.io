# Installation

?> **This installation guide is for the latest version(3.0)**. If you want to install previous versions, [click here](https://cypher-notepad.github.io/wiki/#/installation_previous).

## <i class="fab fa-windows"></i> Windows

* **Requirement: Java Runtime Environment (JRE) 1.8 or higher** 
* **Do you have JRE installed on your computer?**
<table class='download_table'>
    <tr>
        <th> - </th>
        <th>File Name</th>
        <th>File Size</th>
        <th>Download</th>
    </tr>
    <tr>
        <td><b>Yes, I have</b></td>
        <td>Cypher-Notepad.exe</td>
        <td>0.25MB</td>
        <td><i class="fas fa-download"></i> <a href='https://github.com/Cypher-Notepad/Cypher-Notepad/releases/download/v3.0/Cypher-Notepad.exe'>Download</a></td>
    </tr>
    <tr>
        <td><b>No, I don't</b></td>
        <td rowspan='2'>Cypher-Notepad-Setup-bundled-jre.exe</td>
        <td rowspan='2'>27.1MB</td>
        <td rowspan='2'><i class="fas fa-download"></i> <a href='https://github.com/Cypher-Notepad/Cypher-Notepad/releases/download/v3.0/Cypher-Notepad-Setup-bundled-jre.exe'>Download</a></td>
    </tr>
    <tr>
        <td><b>I don't know</b></td>
    </tr>
</table>

<i class="icon ion-md-checkmark-circle icon-virus-free"></i> <a href='https://cypher-notepad.github.io/wiki/#/release_note' class='span-virus-free'>100% Virus Free!</a><br>
(2020-10-06, Version 3.0.0.0; @LeeDongGeon1996)

## <i class="fab fa-linux"></i> Linux

<!-- tabs:start -->

#### ** DEB **
* Debian, Ubuntu
* You can easily install by running these terminal commands: 

```
wget https://github.com/Cypher-Notepad/Cypher-Notepad/releases/download/v3.0/cypher-notepad-3.0-linux.deb
sudo dpkg -i cypher-notepad-3.0-linux.deb
echo "alias cypher-notepad='bash /opt/CypherNotepad/CypherNotepadLauncher'" >> ~/.bashrc 
source ~/.bashrc
```

#### ** RPM **
* Red Hat, Fedora, SUSE
* You can easily install by running these terminal commands: 

```
wget https://github.com/Cypher-Notepad/Cypher-Notepad/releases/download/v3.0/cypher-notepad-3.0-linux.rpm
sudo rpm -i cypher-notepad-3.0-linux.rpm
echo "alias cypher-notepad='bash /opt/CypherNotepad/CypherNotepadLauncher'" >> ~/.bashrc 
source ~/.bashrc
```


<!-- tabs:end -->

* **(Optional)** Create a shortcut in the home directory: 

```
cp /opt/CypherNotepad/CypherNotepad.desktop ${HOME}/CypherNotepad.desktop
sudo chmod 755 ${HOME}/CypherNotepad.desktop
```

* **(Optional)** You can remove `bundled JRE` in the package in order to save memory or change the version (default 1.8) used for launching Cypher Notepad. Make sure JRE is installed.

```
bash /opt/CypherNotepad/scripts/remove_bundled_jre.sh
```

<i class="icon ion-md-checkmark-circle icon-virus-free"></i> <a href='https://cypher-notepad.github.io/wiki/#/release_note' class='span-virus-free'>100% Virus Free!</a><br>
(2020-10-06, Version 3.0.0.0; @LeeDongGeon1996)


## <i class="fab fa-apple"></i> MacOS

* Please download the appropriate `.dmg` file for your Mac below:
* **Don't know which Mac you have?** [Find out if your Mac has an Intel processor or Apple silicon](https://support.apple.com/en-us/116943) 
<table class='download_table'>
    <tr>
        <th>Mac Type</th>
        <th>File Name</th>
        <th>File Size</th>
        <th>Download</th>
    </tr>
    <tr>
        <td><b>Intel Mac</b></td>
        <td>cypher-notepad-3.0-intel.dmg</td>
        <td>36.9MB</td>
        <td><i class="fas fa-download"></i> <a href='https://github.com/Cypher-Notepad/Cypher-Notepad/releases/download/v3.0/cypher-notepad-3.0-intel.dmg'>Download</a></td>
    </tr>
    <tr>
        <td><b>Apple Silicon Mac</b></td>
        <td>cypher-notepad-3.0-apple-silicon.dmg</td>
        <td>36.9MB</td>
        <td><i class="fas fa-download"></i> <a href='https://github.com/Cypher-Notepad/Cypher-Notepad/releases/download/v3.0/cypher-notepad-3.0-apple-silicon.dmg'>Download</a></td>
    </tr>
</table>

<i class="icon ion-md-checkmark-circle icon-virus-free"></i> <a href='https://cypher-notepad.github.io/wiki/#/release_note' class='span-virus-free'>100% Virus Free!</a><br>
(2020-10-19, Version 3.0.0.0; @LeeDongGeon1996)


## Compatibility with v2.1
Cypher Notepad's configuration directory has changed from `${HOME}/Crypto-Notepad` to <code>${HOME}/Cypher-Notepad</code>. The following file must be changed to the new directory for settings to be kept (if you want): 

* <code>crypto-notepad.properties</code> -> <code>cypher-notepad.properties</code>

Unfortunately, however, the encryption algorithm has changed after version 2.1 [AES(ECB) to AES(GCM)]. Files encrypted with version 2.1 cannot be decrypted on version 3.0 and higher. Please encrypt again after decrypting in v2.1. 

?> **Future versions will be compatible with prior versions dating back to version 3.0.**


