import { Component } from '@angular/core';

@Component({
  template: `
    <section>

    <article>
      <h1>About "The Programming Podcast"</h1>
    </article>

    <article>
      <h1>About the host</h1>
    </article>

    </section>
  `,
  styles: [
    `
  section {
    background-color: #333333;
    padding: 30px;
    color: #eee;
  }

  h1 {
    font-size: 2.5em;
    font-weight: 300;
  }
  `
  ]
})
export class AboutComponent {}
