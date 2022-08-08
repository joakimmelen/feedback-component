import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 4,
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, nostrum!",
      },
      {
        id: 2,
        rating: 9,
        text: "Dolor sit amet, consectetur adipisicing elit. Eius magni cum, ullam quasi neque nemo.",
      },
      {
        id: 3,
        rating: 7,
        text: "Commodi harum blanditiis aut pariatur ut quas ex aperiam, deleniti eligendi voluptatibus, illum vero!",
      },
])