# About

## What is Cypher Notepad?

Cypher Notepad is a plain-text editor for those wanting a quick, convenient solution to protect their usernames and passwords, account numbers, and any information they deem private. It features hybrid RSA/AES encryption with a Windows-similar interface, offering both security and ease-of-use. Even those with little-to-no experience encrypting their files can put security concerns out of mind; Cypher Notepad will do the heavy lifting.

**(TL;DR)**
Cypher Notepad is a text editor for users wanting quick and convenient encryption: 

* Usernames and passwords
* Account numbers 
* Any private information 

It's okay if users have little-to-no experience in encryption; they can focus on their files while this program does all the work. 

A Windows-similar interface provides familiarity for users with more secure features. 

![doc_main](https://cypher-notepad.github.io/resource/doc_main.gif)

## Why another notepad?
Nowadays there's no shortage of applications which provide encryption, but as new software becomes increasingly features-heavy, simplicity falls to short supply. Cypher Notepad is the essence of an encryption application with none of the bloat, and unlike other programs it's also Java-based — guaranteeing the same interface no matter which OS you use. This belies the fact that for users unsure of the best way to protect their files, Cypher Notepad is an easy and secure solution. 

## How it works?

**Especially, How does this program's encryption work?**

It uses hybrid encryption, both RSA and AES: 

|Algorithm|Mode|Padding|Bits|
|:------:|:---:|:---:|:---:|
|RSA| - |OAEPWithSHA-1AndMGF1Padding|1024
|AES|GCM|NoPadding|256

* When you save a text file, Cypher Notepad encrypts your text using an AES algorithm. 
* It then encrypts the AES secret key using an RSA algorithm. 

Then, your RSA secret key is saved internally. 

![algorithm](https://cypher-notepad.github.io/resource/algorithm.png) 


<hr>

<p align='center' style='font-size:25px;'>
  <span><b>Awards</b></span>
</p>

<p align='center'>
  <a href='https://cypher-notepad.software.informer.com/'><img height="200"  align='center' style="height:150px;" src="https://img.informer.com/awards/si-award-clean.png" alt="Cypher Notepad" /></a>
  <a href='https://maddownload.com/business-productivity/text-editors/cypher-notepad/'><img height="200"  align='center' style="height:169px;" src="https://cypher-notepad.github.io/resource/award_maddownload.jpg" alt="Cypher Notepad" /></a>
</p>

<hr>


<p align='center' style='font-size:25px;'>
  <span><b>Reviews</b></span>
</p>

<p align='center'>
<span>
  <img src='https://cypher-notepad.github.io/resource/icon_softpedia.ico' style="height:20px;"/>
  <a href='https://www.softpedia.com/get/Office-tools/Text-editors/Cypher-Notepad.shtml'>
    Softpedia
  </a>&nbsp;&nbsp;&nbsp;
  <img src='https://cypher-notepad.github.io/resource/icon_thewindowsclub.ico' style="height:20px;"/>
  <a href='https://www.thewindowsclub.com/cypher-notepad-encrypt-your-text-documents'>
    TheWindowsClub
  </a>&nbsp;&nbsp;&nbsp;
  <img src='https://cypher-notepad.github.io/resource/icon_redeszone.webp' style="height:20px;"/>
  <a href='https://www.redeszone.net/tutoriales/seguridad/cypher-notepad-cifrar-archivos-texto/'>
    RedesZone
  </a>
</span>
<br>
<span>
  <img src='https://cypher-notepad.github.io/resource/icon_filecroco.png' style="height:20px;"/>
  <a href='https://www.filecroco.com/download-cypher-notepad/'>
    FileCroco
  </a>&nbsp;&nbsp;&nbsp;
  <img src='https://cypher-notepad.github.io/resource/icon_finestsoft.ico' style="height:20px;"/>
  <a href='https://finestsoft.com/en/1711/cypher-notepad'>
    FinestSoft
  </a>&nbsp;&nbsp;&nbsp;
  <img src='https://cypher-notepad.github.io/resource/icon_freewarefiles.ico' style="height:20px;"/>
  <a href='https://www.freewarefiles.com/Cypher-Notepad-_program_117555.html'>
    FreewareFiles
  </a>
</span>
<br>
<span>
  <img src='https://cypher-notepad.github.io/resource/icon_maddownload.png' style="height:20px;"/>
  <a href='https://maddownload.com/business-productivity/text-editors/cypher-notepad/'>
    Maddownload
  </a>&nbsp;&nbsp;&nbsp;
  <img src='https://cypher-notepad.github.io/resource/icon_majorgeeks.ico' style="height:20px;"/>
  <a href='https://m.majorgeeks.com/files/details/cypher_notepad.html'>
    MajorGeeks
  </a>&nbsp;&nbsp;&nbsp;
  <img src='https://cypher-notepad.github.io/resource/icon_cypherx.jpg' style="height:20px;"/>
  <a href='https://www.youtube.com/watch?v=M4Scd82CtEA'>
    CypherX
  </a>
</span>
</p>








