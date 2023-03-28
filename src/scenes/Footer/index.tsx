import Logo from "@/Assets/Logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at,
            iusto quae, et facere autem, molestias sint iure repudiandae
            repellendus iste veniam quidem fuga. Repudiandae voluptas
            exercitationem perspiciatis dolorum delectus!
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-2">Massa orci Senectus</p>
          <p className="my-2">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-2">Tempus metus mattis risus volutpat egestas.</p>
          <p>(+55) 21 3547-5898</p>
        </div>
      </div>
    </footer>
  );
};
