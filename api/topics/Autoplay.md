# Autoplay

Autoplay on time-based media can be very distracting. It can also just be inconvenient! If you’ve ever been in a public space when a particularly obnoxious ad began to play, you know what we're talking about.

* That's why Google Chrome and some other browsers have recently disabled autoplay for unmuted videos!

## Who does this impact?


<details><summary>Meet Autumn, a profoundly deaf user.</summary>
  
  ### Autumn Says
"I'm fluent in American Sign Language, but people don't realize that it's different from English and things can be difficult for me to understand."
  
  ### About Autumn

  * Autumn is 22 years old and lives with his family in Boston. He’s profoundly deaf and is fluent in American Sign Language (ASL).
  * He’s currently unemployed, and plans to get some more training at college to help him find a job. He started a catering course last year but the interpreter they provided wasn’t fully qualified and didn’t have much experience. Autumn got behind and gave up.
  * He isn’t very confident about learning new things. He struggles with English because of the differences with ASL in grammar and vocabulary.
  * Autumn uses ASL as his main language, English is his second languages, and always has video captions switched on.
  
  ### Autumn's Technology
  * Autumn has an Android tablet, and loves being able to sign to his friends on video chat. He's sharing his family's laptop until he can afford his own.
  * He also has an iPhone that his brother gave him. He's tried using it for video chat, but it's harder to see what people are saying as the screen's quite small.
  
  ### Autumn's Goals/Wishes
  * Autumn wants more people to know ASL. His brother signs well and his parents know a bit, but they're the only ones in his family who do.
  * He'd like captions (subtitles) to be more available and to make sense - sometimes they're rubbish and you don't know what they mean. Other times, they're not available and you can't understand the full context, especially for audio-heavy apps like TikTok and Clubhouse.
</details>

Here are a few more examples!
  * Preventing autoplay can help Deaf and Hard of Hearing people enjoy and engage with videos and audio which otherwise might not be accessible to them.
  * Turning off autoplay can significantly improve accessibility for people with epilepsy, especially if a video has several flashing screens and/or bright lights.

## How might we help?
The “autoplay” attribute of the “video” element in HTML is a boolean, meaning that its value is true or false. When boolean attributes are included, they are implicitly true, unless they are specified as false. Both of these lines will result in an autoplaying video:


Code Sample #1:
```
<video width="320" height="240" controls autoplay>
```

Code Sample #2:
```
<video width="320" height="240" controls autoplay="true">
```

Given these examples, can you think of how to stop a video from autoplaying?

### Implementing Captions in Code

See the comment in the code editor below? Replace that text with the syntax above, and substitute the labels, source language, and file path to help us find out what the characters in the video are saying!

```
<video width="320" height="240" controls {INSERT_AUTOPLAY_CONFIG_HERE}>
<source src="videos/falling_fruit.mp4" type="video/mp4">
</video>
```




## Answer

<details><summary>Need a hint?</summary>
First, what is a boolean?
</details>

### A quick note
There might be multiple answers! Turning off autoplay can be implemented in a few different ways, like the options shown below.

The first option: set `autoplay` to `off`.
```
<video width="320" height="240" controls autoplay=off>
<source src="videos/falling_fruit.mp4" type="video/mp4">
</video>
```

The second option: delete `autoplay` from the `video` tag.
```
<video width="320" height="240" controls>
<source src="videos/falling_fruit.mp4" type="video/mp4">
</video>
```

### Testing

<figure>
<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@nikhilvytla1/AutoplayExercise1?lite=1?outputonly=1">
</iframe>
</figure>