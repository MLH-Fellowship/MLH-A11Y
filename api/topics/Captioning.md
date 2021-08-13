# Captioning

When working with time-based media, captioning is important because it helps lots of people follow what’s going on!

## Who does this impact?


<details><summary>Meet Saleem, a profoundly deaf user.</summary>
  
  ### Saleem Says
"I'm fluent in American Sign Language, but people don't realize that it's different from English and things can be difficult for me to understand."
  
  ### About Saleem

  * Saleem is 22 years old and lives with his family in Boston. He’s profoundly deaf and is fluent in American Sign Language (ASL).
  * He’s currently unemployed, and plans to get some more training at college to help him find a job. He started a catering course last year but the interpreter they provided wasn’t fully qualified and didn’t have much experience. Saleem got behind and gave up.
  * He isn’t very confident about learning new things. He struggles with English because of the differences with ASL in grammar and vocabulary.
  * Saleem uses ASL as his main language, English is his second languages, and always has video captions switched on.
  
  ### Saleem's Technology
  * Saleem has an Android tablet, and loves being able to sign to his friends on video chat. He's sharing his family's laptop until he can afford his own.
  * He also has an iPhone that his brother gave him. He's tried using it for video chat, but it's harder to see what people are saying as the screen's quite small.
  
  ### Saleem's Goals/Wishes
  * Saleem wants more people to know ASL. His brother signs well and his parents know a bit, but they're the only ones in his family who do.
  * He'd like captions (subtitles) to be more available and to make sense - sometimes they're rubbish and you don't know what they mean. Other times, they're not available and you can't understand the full context, especially for audio-heavy apps like TikTok and Clubhouse.
</details>

Here are a few more examples!
  * Captions can help Deaf and Hard of Hearing people enjoy and engage with videos and audio which otherwise might not be accessible to them.
  * Captions can help some people who have trouble concentrating, such as those with ADHD, keep track of what’s happening.
  * Captions can help anyone trying to watch their favorite Netflix show while a younger sibling is shouting or banging on their musical instrument of choice.

## How might we help?
To implement captioning in HTML, yous must have a captioning file available. In the following example, the captioning file we need is located at the following path.

```html
files/eng_captions.txt
```

We've also received the syntax for implementing English-language captions:

```html
<track label="English" kind="captions" srclang=en" src=""{filepath}" default>
```

### Implementing Captions in Code

See the comment in the code editor below? Replace that text with the syntax above, and substitute the labels, source language, and file path to help us find out what the characters in the video are saying!

```html
<video id="my-video-stream" width="800" height="600" controls>
  <source src="sample_video.mp4" type="video/mp4"> 
  '{INSERT CAPTION HERE}'
</video>
```

<figure>
<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@nikhilvytla1/CaptioningExercise1?lite=1?outputonly=1">
</iframe>
</figure>

## Answer

<details><summary>Need a hint?</summary>
Try checking out the syntax for implementing English-language captions provided above!
</details>

### A quick note
There might be multiple answers! Digital accessibility can be implemented in many different ways, but here's one implementation we like.

```html
<track label="English" kind="captions" srclang="en" src="files/captions.txt" default>
```



