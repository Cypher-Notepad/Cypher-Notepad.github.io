# How To Use

## Hotkey Menus

### File Menu

  |Menu|Description|Hotkey|
  |:------|:---|:---:|
  |New|Start new file |Ctrl + N
  |Open|Open file (Encrypted/Unencrypted)|Ctrl + O
  |Save|Save file (Encrypted/Unencrypted)|Ctrl + S
  |Save As|Save as new file| - 
  |Import Key|Import key for internal storage| - 
  |Export Key|Export key as `.pem` file| - 
  |Page Setup|Format for printing| - 
  |Print|Print file|Ctrl + P
  |Exit|Terminate process| - 

### Edit Menu

  |Menu|Description|Hotkey|
  |:------|:---|:---:|
  |Undo|Undo previous edit|Ctrl + Z
  |Cut|Cut selected text|Ctrl + X
  |Copy|Copy selected text|Ctrl + C
  |Paste|Paste selected text|Ctrl + V
  |Delete|Delete selected text|Delete
  |Search with Google|Search selected text with Google|Ctrl + E
  |Find|Find input text|Ctrl + F
  |Find Next|Find next of input text|F3
  |Replace|Replace input text|Ctrl + H
  |Select All|Select all text|Ctrl + A
  |Time/Date|Input current time and date|F5

### Format Menu

  |Menu|Description|Hotkey|
  |:------|:---|:---:|
  |Word Wrap|Break lines between words to adjust them within editor's width| - 
  |Font|Choose text font | - 
  |Encryption|Turn on/off encryption mode| - 

### View Menu

  |Menu|Description|Hotkey|
  |:------|:---|:---|
  |Status Bar|Show/Hide status bar| - 

### Help Menu

  |Menu|Description|Hotkey|
  |:------|:---|:---:|
  |About Cypher Notepad|Show program information|F1
  |Cypher Notepad Website|Open official website|F2
  |Check for Update|Check available updates|F11
  |Settings|Configure program options|F12


## Settings

|Setting|Description
|:------|:---
|Language (언어)|Sets language to English or Korean. Changes take effect after restart
|Invalidate All Encrypted Files|**Caution:** This wipes all keys in internal keyfile;<br>Encrypted files will be inaccessible without external <code>.pem</code> 
|Initialize Settings|Return to default settings 

## Key Export

1. Write a text file and save. Cypher Notepad encrypts the text automatically and stores the key internally for quick access. 
2. Anyone using your machine can still open your text file using Cypher Notepad, so access the **Menu Bar** and **File -> Export Key**. 
3. Place the exported key (`.pem` ) wherever you feel it's safe: a chosen directory folder, USB storage, or cloud service. 

![sc](https://github.com/LeeDongGeon1996/images/blob/master/export.gif?raw=true ':size=800')

## Key Import

1. The <code>.pem</code> key must be used every time you open your encrypted file. If you don't wish to do this, you can skip this step by importing the key so that Cypher Notepad manages it internally. 

2. Access the **Menu Bar** and **File -> Import Key** for CN to manage the key internally. 

!> **Keep in mind this is trading security for convenience.** 


![sc](https://github.com/LeeDongGeon1996/images/blob/master/import.gif?raw=true ':size=800')


