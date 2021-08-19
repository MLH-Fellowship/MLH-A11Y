# Autoplay

Autoplay on time-based media can be very distracting. It can also just be inconvenient! If you’ve ever been in a public space when a particularly obnoxious ad began to play, you might know what we're talking about.

* That's why Google Chrome and some other browsers have recently disabled autoplay for unmuted videos!

## Who does this impact?


<details><summary>Meet Claudia, a sight impaired screen magnifier user.</summary>
  
  ### Claudia Says
"My screen magnifier has made it possible for me to use the web again. I just wish more companies kept their websites simple."
  
  ### About Autumn

  * Claudia is 54 and lives in Hampton with her husband Lex and daughter Diana who is 12. Her other two children are away at university.
  * Claudia is partially sighted due to glaucoma and diabetes.
  * She works part time as a social worker with her local city council. She used to visit people in their homes, but lost her confidence as her sight got worse. Now she’s based in the office, and she’s hoping to start training and mentoring new social workers.
  
  ### Claudia's Technology
  * Claudia’s setup at work includes ZoomText (software that lets you magnify what’s on screen), a large monitor and a high visibility keyboard. She has a similar setup at home.
  * She recently got a Kindle Fire for reading - she has tried its screen reader function, but she prefers to use the magnification to read herself or use audiobooks.
  * Claudia prefers phone calls to emails and never sends text messages. She uses the ‘speech to text’ feature on her smartphone, which records a message and sends it to the person she’s contacting.
  
  ### Claudia's Goals/Wishes
  * Claudia wants to be able to watch videos and consume time-based media easily and efficiently.
  * She also wishes there was less clutter on some websites - she just wants to get on with what she’s doing.
</details>

Here are a few more examples!
  * Turning autoplay can help people with disabilities enjoy and engage with videos and audio which otherwise might not be easy to access (or inaccessible) for them.)
  * Sometimes it’s hard for Claudia to see time-based media content clearly when she borrows her husband’s tablet, especially if the color contrast isn’t good.

## How might we help?
The “autoplay” attribute of the “video” element in HTML is a boolean, meaning that its value is true or false. When boolean attributes are included, they are implicitly true, unless they are specified as false. Both of these lines will result in an autoplaying video:


Code Sample #1:

```html
<video width="320" height="240" controls autoplay>
```

Code Sample #2:

```html
<video width="320" height="240" controls autoplay="true">
```

Given these examples, can you think of how to stop a video from autoplaying?

### Implementing Captions in Code

See the comment in the code editor below? Replace that text with the syntax above, and substitute the labels, source language, and file path to help us find out what the characters in the video are saying!

```html
<video width="320" height="240" controls {INSERT_AUTOPLAY_CONFIG_HERE}>
<source src="videos/falling_fruit.mp4" type="video/mp4">
</video>
```

<figure>
<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@nikhilvytla1/AutoplayExercise1?lite=1?outputonly=1">
</iframe>
</figure>


## Answer

<details><summary>Need a hint?</summary>
First, what is a boolean?
</details>

### A quick note
There might be multiple answers! Turning off autoplay can be implemented in a few different ways, like the options shown below.

The first option: set `autoplay` to `off`.

```html
<video width="320" height="240" controls autoplay=off>
<source src="videos/falling_fruit.mp4" type="video/mp4">
</video>
```

The second option: delete `autoplay` from the `video` tag.

```html
<video width="320" height="240" controls>
<source src="videos/falling_fruit.mp4" type="video/mp4">
</video>
```