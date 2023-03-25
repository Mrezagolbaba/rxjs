import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const button = document.getElementById('button');

fromEvent(button, 'click')
  .pipe(
    map((event) => event.target),
    map((target) => target.textContent)
  )
  .subscribe((text) => {
    console.log(`Clicked button: ${text}`);
  });
