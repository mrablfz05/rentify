import Image from "next/image";

import { images } from "@/constants";

export default function SignUp() {
  return (
    <div>
      <div>Hello sign up page</div>
      <Image src={images.logo} width={80} height={80} alt="s" />
      <Image src={images.leftback} width={80} height={80} alt="s" />
      <form action="#">
        <label htmlFor="name">name</label>
        <input type="text" name="first_name" id="name" />
        <input type="text" name="last_name" id="lastname" />
        <input type="text" name="number" id="number" />
        <input type="checkbox" name="" id="" />
        <input type="button" value="click" />

        <Image src={images.facebook} width={80} height={80} alt="s" />
        <Image src={images.linkedin} width={80} height={80} alt="s" />
        <Image src={images.google} width={80} height={80} alt="s" />
      </form>
    </div>
  );
}
