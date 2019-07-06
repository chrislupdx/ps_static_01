export default function makeListComponent() {
    const html = /*html*/`
    <ul class="collection">
          <a href="#!" class="collection-item">LFW</a>
          <a href="#!" class="collection-item">Fixr</a>
          <a href="#!" class="collection-item">Haikubot</a>
          <a href="#!" class="collection-item">Camp_Drems</a>
        </ul>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}