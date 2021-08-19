# Minimal Animations

Like autoplay, excessive animations or color switching can be very distracting, and are especially triggering for those with epilepsy. It can be very difficult to convey information about the page to someone who cannot see it, and it makes for an overwhelming user experience for anyone who can. As such, it’s best to minimize animations or remove them entirely whenever possible!

## Who does this impact?


<details><summary>Meet Pawel, a user with Asperger's.</summary>
  
  ### Pawel Says
"Websites can be so distracting. It takes me ages to do anything sometimes, as I feel like I have to read every word and click on every link."
  
  ### About Pawel

  * Pawel is 24 and lives with his mum and dad in Baton Rouge. He has been looking for a job as a pharmacologist since finished his chemistry degree.
  * He has Asperger’s, a condition on the autism spectrum that affects how he sees the world and interacts with people. He was also recently diagnosed with anxiety.
  * He’s recently been looking at the National Autistic Society’s (UK) resources on employment. He’ll approach them for more support when he feels a bit more ready.
  
  ### Pawel's Technology
  
  * Pawel is good with technology and can usually figure out how things work himself. He prefers to use apps because they’re simpler and less cluttered than websites.
  * His parents recently bought him a laptop for his birthday, which is great for playing games and looking for jobs.
  * He struggles with face to face communication, but likes chatting to people in gaming communities online. He gave up social media as all the comments were making him anxious.
  
  ### Pawel's Goals/Wishes
  
  * Pawel wishes he could find what he needs on websites more easily - sometimes there’s so much to read through.
  * He wants to be able to talk to people using web chat instead of the phone so he has time to think about what he wants to say.
</details>

Here are a few more examples!

  * Pawel thinks websites often assume you know more than you do.
  * Pawel gets distracted by other things as well - he finds moving content like banners or video distracting, and gets stressed out by bright colours.

## How might we help?
In the below animation, the content and colors are shifting so quickly that everything feels like a blur. Let's make the animation a bit more reasonable and help Pawel out on their journey.

![A blurry gif of a man talking](https://c.tenor.com/rEyvlPG_0rgAAAAM/balling-talking.gif)

To minimize animations, reduce the iteration count to 3, and reduce the time taken to 3 seconds.

### Reducing Animations in Code

See the comment in the code editor below? Replace that text with the appropriate code changes in the `styles.css` file.

```html
div {animation-iteration-count: infinite;
transition: 0.5s; {INSERT_ANIMATION_CONFIG_HERE}}
```

<figure>
<iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@nikhilvytla1/AnimationExercise1?lite=1?outputonly=1">
</iframe>
</figure>


## Answer

<details><summary>Need a hint?</summary>
This section uses CSS. If you need help with CSS, we suggest checking out Flexbox Froggy or CSS Diner for tips!
</details>

### A quick note
There might be multiple answers! Reducing animations can be implemented in many different ways. Below is one that we like:


To minimize animations, reduce the iteration count to `3`, and reduce the transition time taken to `3` seconds.

```html
div {animation-iteration-count: 3;
transition: 3s;}
```
