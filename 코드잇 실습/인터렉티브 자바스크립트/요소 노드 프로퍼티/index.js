// DOM 프로퍼티
const myTag = document.querySelector("#list-1");

//* textContext
console.log(myTag.textContent);
myTag.textContent = 'new text'
// Ragdoll
// British Shorthair
// Scottish Fold
// Bengal
// Siamese
// Maine Coon
// American Shorthair
// Russian Blue

//* outerHTML
console.log(myTag.outerHTML);
//
{
  /* <ul id="list-1">
  <li>Ragdoll</li>
  <li>British Shorthair</li>
  <li>Scottish Fold</li>
  <li>Bengal</li>
  <li>Siamese</li>
  <li>Maine Coon</li>
  <li>American Shorthair</li>
  <li>Russian Blue</li>
</ul>; */
}

//* innerHTML
console.log(myTag.innerHTML);
//
{
  /* <li>Ragdoll</li>
<li>British Shorthair</li>
<li>Scottish Fold</li>
<li>Bengal</li>
<li>Siamese</li>
<li>Maine Coon</li>
<li>American Shorthair</li>
<li>Russian Blue</li> */
}
