# Personal Web Dev Portfolio

This is the code for my personal portfolio's landing page, which you can find [here](https://www.sunkenworld.com/).

Since you came all the way here, why not have a quick look at some of the code?

The primary wizardry of this site revolves around a custom function that uses JavaScript's IntersectionObserver() to track which page is visible within its defined threshold, and it makes use of [GSAP](https://greensock.com/gsap/) to animate each component based on the page's visibility and view count.

This project would have been quite a bit easier if I had wanted each element to only animate once, or even if each page animated the same way every time, but I wanted to add a layer of complexity by having an initial longer animation the first time you see a page, an exit animation when you leave the page, and then a shorter animation each subsequent time you see the page. Here I'll break down the steps I took to achieve this.

First, a variable is defined for each page that is set to `true` or `false` to define exactly when each page is in view. For this article, I'll be using Page 2 as an example, and will remove any extra code:
```
export default function Portfolio() {
  `ref2 = useRef()`;

  const page2Visible = useIntersection(ref2, "page-2", 0.55);

  return (
    <div ref={ref2} data-page="page-2">
      <Page2 pageVisible={page2Visible} />
    </div>
  );
}
```
Where `ref2` is the reference point for Page2 defined with React's useRef() hook, `"page-2"` is a string that will be used to replace the history state, and `0.55` is the threshold, or the minimum ratio of the page that needs to be in view for the animation to trigger. In this case, once 55% of the page is in view in the browser window, the animation will trigger. Once less than 55% is visible, the exit animation will trigger.

The function `useIntersection` looks like this:
```
export default function useIntersection(ref, page, threshold) {
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPageVisible(true);
        } else {
          setPageVisible(false);
        }
      },
      { threshold }
    );

    if (pageVisible) {
      window.history.replaceState({ page }, "", `#${page}`);
    }

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  });
  return pageVisible;
}
```
This essentially takes the props we just defined and returns a `true/false` boolean which is stored in the main component as `page2Visible`, as well is replacing the browser's History state, appending "#page-2" to the URL.

Once we get the value for `page2Visible`, we pass it to the `Page2` component as `pageVisible`, as can be seen in the fist code block. In `Page2`, animations specific to each page are defined and a useEffect() hook is run that takes care of the of the animations based on if the page is visible (`pageVisible`), if the animation is currently taking place (`inProgress`), and if the animation has run more than once (`page2Count`). With the animations omitted, it looks like this:
```
useEffect(() => {
  // if an animation is not in progress, then animate:
  if (!inProgress) {
    // if the page is in focus:
    if (pageVisible) {
      // initial full animation:
      if (page2Count === 0) {
        setInProgress(true);
        <INITIAL ANIMATIONS>
        setPage2Count(1);
        setTimeout(() => setInProgress(false), 4500);
      }
      // short animation:
      if (page2Count > 0) {
        setInProgress(true);
        <SUBSEQUENT ANIMATIONS>
        setTimeout(() => setInProgress(false), 1000);
      }
      // if the page is no longer in focus, fade out:
    } else {
      <EXIT ANIMATIONS>
    }
  }
}, [pageVisible, page2Count, inProgress]);
```
Note that once an animation has been triggered, the `inProgress` variable is set using setTimeout() for a duration equal to the length of the animation, so if the user leaves a page while it's animating it will continue without being interrupted.

***

That's the rundown of how I combined an IntersectionObserver() with the History API and some GSAP animations to dynamically animate text and images on my website. I hope you've found this interesting and/or educational! If you'd like to see all the code, check out the JavaScript in `src/components`.

Thanks for reading! Check out the rest of my work at https://www.sunkenworld.com/.
