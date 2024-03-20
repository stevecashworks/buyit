
const variants = {
  left: {
    initial: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  },
  center:{
 initial:{
  opacity:0,
  y:100,
 },visible:{
    opacity:1,
    y:0,
    transition:{
        delay:0.8,
        duration:0.5
    }

 }
  },
 

  right: {
    initial: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.8,
      },
    },
  },
 
};
export default variants