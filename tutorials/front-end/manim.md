---
title: 'Manim'
synopsis: 'A tutorial for Manim, a python library for animating.'
date: 2024-10-10
author:
  name: 'Mardoek Thienpondt'
  avatarUrl: '/assets/avatars/mardoek-thienpondt.png'
  socials: # Add social media links -> If you don't have any, place an empty string ''
    website: ''
    linkedin: ''
    github: ''
thumbnailUrl: '/assets/tutorials/manim/manim-logo.png'
head:
  - - meta
    - name: description
      content: 'This is a tutorial for Manim. This will show the basics of the Manim library.' # Add a description of the article
  - - meta
    - name: keywords
      content: 'Manim frontend python animations library' # Add keywords related to the article
---

## 1. What is Manim

Manim is a python library which can export python code to animations/videos/images. It originally was intended for personal use by Grant Sanderson from the youtube channel [3Blue1Brown](https://www.youtube.com/@3blue1brown). Many grew interest in his animations, resulting in 3Blue1Brown sharing his work. Initially it had little to no documentation and no support, but the awesome community did not hesitate to fork the project and make it accessible for everyone. And thus, the Manim Community was born.

![3blue1brown logo](/assets/tutorials/manim/3Blue1Brown.jpg)
![Grant Sanderson](/assets/tutorials/manim/3Blue1BrownAvatar.jpg)

## 2. An example I made

<video width="auto" height="600" controls>
  <source src="/assets/tutorials/manim/IntroductionExample.mp4" type="video/mp4">
</video>

For this example, it took me several hours of research but only 2 minutes of actual coding. This also is still very basic, because we stuck with a 2D plane.

If you would like to play with this animation or understand how it works, the code for it is below.

```python
from manim import *
#  manim -pql demo.py IntroductionExample
# the command above checks the demo.py file for the IntroductionExample scene and exports it to a mp4 file, the -pql indicates low quality rendering
class IntroductionExample(Scene):
    def construct(self):
        txt1 = Text("If I said making animations are easy, this would be an understatement.", font="Noto Sans", font_size=30)
        txt2 = Text("This animation, which could take several hours in css or design tools,\n now is just several lines of code.",font_size=30)
        txt3 = Text("Lets talk about some use cases why you should use manim.",font_size=30)
        txt4 = Text("Happy manimating!",font_size=30)
        circle = Circle(color=GREEN, fill_opacity=1).to_edge(UL).shift(DOWN)
        square = Square(color="#525990", fill_opacity=1).to_edge(UL).shift(RIGHT)
        triangle = Triangle(color="#e07a61", fill_opacity=1).to_edge(UL).shift(RIGHT*2).shift(DOWN)
        shapes = Group(circle, square, triangle)
        banner = ManimBanner(dark_theme=True)
        txt4.next_to(banner, DOWN)
        self.play(FadeIn(txt1, run_time=1))
        self.wait(1.5)
        self.play(
            Transform(txt1, triangle)
        )
        self.play(FadeIn(txt2, run_time=1))
        self.wait(1.5)
        self.play(
            Transform(txt2, square)
        )
        self.play(FadeIn(txt3, run_time=1))
        self.wait(1.5)
        self.play(
            Transform(txt3, circle)
        )
        self.wait(1)
        self.remove(txt1, txt2, txt3)
        self.play(
            Transform(shapes, banner),
        )
        self.remove(shapes)
        self.play(
            banner.expand()
        )
        self.play(Write(txt4, run_time=1))
        self.wait(2)
        self.play(
            Unwrite(banner, run_time=1),
            Unwrite(txt4, run_time=1)
            )
```

It is best practice to think of a script beforehand and then write down or declare all the objects you will end up showing on the animation. After it becomes childsplay to apply animations with the "self" instance of the Scene class by applying `self.play(animation)` appropriately.

### Some extra notes

- every object instance is a MObject (manim object), this allows animations to occur between all of them.
- the feature above allows text to be transformed into shapes and vice-versa, which is unusual for editing software.
- the ManimBanner object is a prebuilt component implemented within Manim, which is the logo and has some properties to play around with.

## 3. A more complex example

<video width="auto" height="600" controls>
  <source src="/assets/tutorials/manim/ThreeDLightSourcePosition.mp4" type="video/mp4">
</video>

The example above utilizes the 3D scene builtin Manim. As pretty as it looks, this is just a glimpse of what Manim can make.

```python
from manim import *
class ThreeDLightSourcePosition(ThreeDScene):
    def construct(self):
        axes = ThreeDAxes()
        sphere = Surface(
            lambda u, v: np.array([
                1.5 * np.cos(u) * np.cos(v),
                1.5 * np.cos(u) * np.sin(v),
                1.5 * np.sin(u)
            ]), v_range=[0, TAU], u_range=[-PI / 2, PI / 2],
            checkerboard_colors=[GRAY_D, GRAY_E], resolution=(15, 32)
        )
        self.renderer.camera.light_source.move_to(3*IN) # changes the source of the light
        self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
        self.play(Create(axes))
        self.wait()
        self.play(Create(sphere))
        self.play(
            Rotate(sphere, run_time=5, axis=OUT),
            run_time=5, rate_func=linear
        )
        self.play(FadeOut(axes), Rotate(sphere, run_time=5, axis=OUT),
            run_time=2, rate_func=linear)
        self.play(
            Rotate(sphere, run_time=5, axis=OUT),
            run_time=5, rate_func=linear
        )
```

## 4. Usecases

- Educate or stun the viewer with beautiful animations, explain complicated concepts such as Math topics or data statistics.
- Make videos / pictures to add to your website or upload to youtube

## 5. Installation

### Recommended

To get started with Manim, I recommend

- some python knowledge, I practised python on [kaggle.com](https://www.kaggle.com/learn)
- some understanding and interest for basic Math concepts

### Installing Manim locally

Manim is a Python library, and it can be installed via pip or conda. However, in order for Manim to work properly, some additional system dependencies need to be installed first. The following pages have operating system specific instructions for you to follow.

Manim requires Python version 3.8 or above to run.

#### Windows

`choco install manimce`, you can install [choco](https://chocolatey.org/install#install-step2) for the cli here.

#### MacOS

To install all required dependencies for installing Manim (namely: ffmpeg, Python, and some required Python packages), run:

`brew install py3cairo ffmpeg`

On Apple Silicon based machines (i.e., devices with the M1 chip or similar; if you are unsure which processor you have check by opening the Apple menu, select About This Mac and check the entry next to Chip), some additional dependencies are required, namely:

`brew install pango pkg-config scipy`

After all required dependencies are installed, simply run:

`pip3 install manim`

You can find more info about the Manim installation here on [manim documentation](https://docs.manim.community/en/stable/installation.html).

## 6. Starting a new project

Start by creating a new folder. For the purposes of this guide, name the folder project:

`project/`

This folder is the root folder for your project. It contains all the files that Manim needs to function, as well as any output that your project produces.

1. Open a text editor, such as Notepad. Copy the following code snippet into the window:

   ```python
   from manim import *

   class CreateCircle(Scene):
       def construct(self):
           circle = Circle()  # create a circle
           circle.set_fill(PINK, opacity=0.5)  # set the color and transparency
           self.play(Create(circle))  # show the circle on screen
   ```

2. Save the code snippet into your project folder with the name scene.py.

   ```explorer
   project/
   └─scene.py
   ```

3. Open the command line, navigate to your project folder, and execute the following command:

   ```terminal
   manim -pql scene.py CreateCircle
   ```

   You now made your first Manim project!

<video width="auto" height="600" controls>
<source src="/assets/tutorials/manim/CreateCircle.mp4" type="video/mp4">
</video>

## 7. Resources

[3Blue1Brown](https://www.youtube.com/@3blue1brown) puts the code of all his videos online, he is the creator of the library and makes stunning educational content. You can view it on his [github repo](https://github.com/3b1b/videos/tree/master) which he links after every video.

The Manim community have made tons of [documentation](https://docs.manim.community/en/stable/index.html) with tutorials and loads of examples.

The Manim community has an active [discord](https://manim.community/discord/) where you can meet other people, view other people's code and ask for help about Manim.
