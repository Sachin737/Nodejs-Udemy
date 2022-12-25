import React from "react";
import PropTypes from "prop-types";

export default function About(props) {
  let TextColour = "text-black";
  if (props.mode === "dark") {
    TextColour = "text-light";
  }


  return (
    <div className={`container ${TextColour}`}>
      <h2>Who are we?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
        impedit atque optio molestiae sapiente, ullam beatae ratione similique
        earum voluptatum molestias, sed esse. In ipsa amet deserunt quas officia
        aspernatur odio a maiores, sed earum vel consectetur tenetur provident,
        facere obcaecati nobis possimus impedit voluptate placeat. Dignissimos
        odit facilis consectetur excepturi, atque repudiandae, esse nesciunt
        possimus in amet omnis? Libero at obcaecati maiores quasi, assumenda
        provident perspiciatis, pariatur nesciunt architecto laboriosam
        excepturi earum debitis, ut eos magnam sed fugiat. Facilis sequi non
        soluta, impedit sapiente maxime beatae culpa error neque obcaecati,
        similique repellat earum sunt voluptate distinctio blanditiis accusamus
        ab?
      </p>
      <hr />
      <h2>What we do?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo a
        mollitia assumenda aspernatur praesentium accusantium ex possimus,
        laboriosam nulla. Itaque, cumque recusandae. Illum ipsum repudiandae
        iusto aperiam veniam dolorem recusandae nobis inventore impedit tempora
        harum at exercitationem porro dolores, corporis perspiciatis, ad
        perferendis tenetur magni similique. Hic, iste obcaecati?
      </p>
    </div>
  );
}
