import Image from "next/image";

const ContactUs = () => {
  return (
    <section
      id="ContactUs"
      className="text-sm sm:text-base w-full pt-10 sm:pt-20 pb-5 relative items-center justify-evenly bg-gra-gray"
    >
      <div className="flex flex-col p-4 sm:flex-row justify-around font-light">
        <div className="sm:w-1/3">
          <p className="text-xl sm:text-2xl font-bold font-inter">
            COMPUTER SOCIETY OF INDIA
          </p>
          <p className="mt-2">
            The Computer Society of India is the largest body of computer
            professionals in India. We are a group of skilled designers,
            developers and tech enthusiasts who engage in a lot of projects and
            hackathons. To help push technology forward, we organise a wide
            range of workshops, conferences, events and competitions both
            technical and non-technical.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-start sm:items-end mb-2">
            <p className="text-xl sm:text-2xl font-bold sm:text-right mt-2 md:mt-0 mb-2 font-inter">
              CONTACT US
            </p>
            <div className="flex justify-end gap-2">
              <p className="whitespace-nowrap mb-2 font-medium">Email: </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:askcsivit@gmail.com"
                className="transition ease-linear hover:text-ds-blue hover:underline"
              >
                askcsivit@gmail.com
              </a>
            </div>

            <div className="flex justify-end gap-2">
              <p className="font-medium">Phone Number:</p>
              <div className="flex flex-col items-start">
                <a
                  href="tel: +919910158496"
                  className="transition ease-linear hover:text-ds-blue hover:underline"
                >
                  +91 9910158496
                </a>
                <a
                  href="tel:+919757440748"
                  className="transition ease-linear hover:text-ds-blue hover:underline"
                >
                  +91 9757440748
                </a>
              </div>
            </div>
          </div>
          <div id="socials" className="sm:mt-4">
            <p className="text-xl sm:text-2xl font-bold mb-2 sm:text-right font-inter ">
              OUR SOCIALS
            </p>
            <div className="mt-2 flex flex-row gap-3 text-2xl sm:justify-end">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/csivitu"
                className="text-white hover:text-ds-blue transition ease-linear"
              >
                <InstagramIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/csivitu"
                className="text-white hover:text-ds-blue transition ease-linear"
              >
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/csivitu"
                className="text-white hover:text-ds-blue transition ease-linear"
              >
                <LinkedInIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://fb.com/csivitu"
                className="text-white hover:text-ds-blue transition ease-linear"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center w-full justify-center p-2">
        <a target="_blank" rel="noreferrer" href="https://csivit.com/">
          <Image src="/images/Logo.png" height="29" width="156" alt="CSI_logo" />
        </a>
        <hr className="h-7 bg-white w-px" />
        <a href="https://gravitas.vit.ac.in/" target="_blank">
          <Image src="/images/Gravitas.svg" height="30" width="156" alt="Devspace_logo" />
        </a>
      </div>
    </section>
  );
};

const InstagramIcon = () => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 139 139"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1177_3349)">
        <path
          d="M69.334 12.4866C87.8618 12.4866 90.0559 12.5678 97.3424 12.8929C104.114 13.1908 107.771 14.3285 110.209 15.2766C113.432 16.5226 115.762 18.0395 118.173 20.4503C120.61 22.8881 122.1 25.1906 123.346 28.414C124.294 30.8518 125.432 34.5357 125.73 41.2805C126.055 48.5941 126.136 50.7881 126.136 69.2888C126.136 87.8166 126.055 90.0107 125.73 97.2972C125.432 104.069 124.294 107.726 123.346 110.164C122.1 113.387 120.583 115.717 118.173 118.127C115.735 120.565 113.432 122.055 110.209 123.301C107.771 124.249 104.087 125.387 97.3424 125.685C90.0288 126.01 87.8347 126.091 69.334 126.091C50.8062 126.091 48.6121 126.01 41.3256 125.685C34.5538 125.387 30.897 124.249 28.4591 123.301C25.2357 122.055 22.9062 120.538 20.4954 118.127C18.0575 115.69 16.5677 113.387 15.3217 110.164C14.3736 107.726 13.236 104.042 12.938 97.2972C12.613 89.9836 12.5317 87.7895 12.5317 69.2888C12.5317 50.7611 12.613 48.567 12.938 41.2805C13.236 34.5086 14.3736 30.8518 15.3217 28.414C16.5677 25.1906 18.0846 22.861 20.4954 20.4503C22.9333 18.0124 25.2357 16.5226 28.4591 15.2766C30.897 14.3285 34.5809 13.1908 41.3256 12.8929C48.6121 12.5678 50.8062 12.4866 69.334 12.4866ZM69.334 -0.000732422C50.5082 -0.000732422 48.1516 0.0805298 40.7568 0.405579C33.389 0.730627 28.3237 1.92247 23.9355 3.62898C19.3577 5.41675 15.4842 7.77335 11.6378 11.6469C7.76432 15.4933 5.40772 19.3668 3.61995 23.9174C1.91344 28.3327 0.721594 33.3709 0.396545 40.7387C0.0714966 48.1607 -0.00976562 50.5173 -0.00976562 69.343C-0.00976562 88.1688 0.0714966 90.5254 0.396545 97.9202C0.721594 105.288 1.91344 110.353 3.61995 114.742C5.40772 119.319 7.76432 123.193 11.6378 127.039C15.4842 130.886 19.3577 133.269 23.9084 135.03C28.3237 136.736 33.3619 137.928 40.7297 138.253C48.1246 138.578 50.4812 138.66 69.3069 138.66C88.1327 138.66 90.4893 138.578 97.8841 138.253C105.252 137.928 110.317 136.736 114.705 135.03C119.256 133.269 123.13 130.886 126.976 127.039C130.822 123.193 133.206 119.319 134.967 114.769C136.673 110.353 137.865 105.315 138.19 97.9473C138.515 90.5525 138.596 88.1959 138.596 69.3701C138.596 50.5444 138.515 48.1878 138.19 40.7929C137.865 33.4251 136.673 28.3598 134.967 23.9716C133.26 19.3668 130.904 15.4933 127.03 11.6469C123.184 7.80044 119.31 5.41675 114.76 3.65607C110.344 1.94956 105.306 0.757715 97.9383 0.432666C90.5163 0.0805298 88.1597 -0.000732422 69.334 -0.000732422Z"
          fill="currentColor"
        />
        <path
          d="M69.3309 33.7227C49.6654 33.7227 33.7109 49.6771 33.7109 69.3426C33.7109 89.0081 49.6654 104.963 69.3309 104.963C88.9963 104.963 104.951 89.0081 104.951 69.3426C104.951 49.6771 88.9963 33.7227 69.3309 33.7227ZM69.3309 92.4482C56.5727 92.4482 46.2253 82.1008 46.2253 69.3426C46.2253 56.5844 56.5727 46.237 69.3309 46.237C82.089 46.237 92.4364 56.5844 92.4364 69.3426C92.4364 82.1008 82.089 92.4482 69.3309 92.4482Z"
          fill="currentColor"
        />
        <path
          d="M114.679 32.3149C114.679 36.9197 110.94 40.6307 106.363 40.6307C101.758 40.6307 98.0469 36.8926 98.0469 32.3149C98.0469 27.71 101.785 23.999 106.363 23.999C110.94 23.999 114.679 27.7371 114.679 32.3149Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

const TwitterIcon = () => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 103 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1177_3333)">
        <path
          d="M32.1418 92.6269C70.7103 92.6269 91.8057 60.6732 91.8057 32.9631C91.8057 32.0555 91.8057 31.152 91.7444 30.2526C95.8483 27.2841 99.3908 23.6087 102.206 19.3983C98.3794 21.0949 94.3194 22.207 90.1622 22.6975C94.5399 20.0771 97.8162 15.9552 99.3812 11.0991C95.2651 13.5419 90.7618 15.2633 86.0658 16.189C82.9042 12.8272 78.7227 10.601 74.1684 9.85511C69.6142 9.10919 64.941 9.88505 60.8722 12.0626C56.8033 14.2402 53.5655 17.6981 51.6599 21.9012C49.7542 26.1044 49.287 30.8184 50.3304 35.3138C41.9935 34.8956 33.8377 32.729 26.3924 28.9546C18.9471 25.1801 12.3787 19.8823 7.11355 13.4049C4.43204 18.0212 3.61074 23.4859 4.81689 28.6865C6.02304 33.8871 9.16594 38.4324 13.6057 41.3971C10.2685 41.2993 7.00388 40.399 4.08825 38.7725V39.0382C4.08957 43.8796 5.7655 48.5715 8.83177 52.318C11.898 56.0646 16.1659 58.6353 20.9114 59.5939C17.8242 60.436 14.5851 60.5591 11.443 59.9537C12.7835 64.12 15.3924 67.7632 18.9049 70.3742C22.4174 72.9851 26.658 74.4332 31.0339 74.516C26.6862 77.9334 21.7074 80.4601 16.3823 81.9515C11.0571 83.4429 5.49024 83.8697 0 83.2076C9.58964 89.3614 20.7475 92.6256 32.1418 92.6106"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

const LinkedInIcon = () => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 103 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1177_3340)">
        <path
          d="M94.6614 0H7.5448C5.5438 0 3.62475 0.794898 2.20982 2.20982C0.794898 3.62475 0 5.5438 0 7.5448V94.6614C0 96.6624 0.794898 98.5814 2.20982 99.9964C3.62475 101.411 5.5438 102.206 7.5448 102.206H94.6614C96.6624 102.206 98.5814 101.411 99.9964 99.9964C101.411 98.5814 102.206 96.6624 102.206 94.6614V7.5448C102.206 5.5438 101.411 3.62475 99.9964 2.20982C98.5814 0.794898 96.6624 0 94.6614 0ZM30.4631 87.0669H15.0967V38.2563H30.4631V87.0669ZM22.7693 31.4923C21.0262 31.4825 19.3251 30.9565 17.8807 29.9809C16.4363 29.0052 15.3132 27.6235 14.6533 26.0101C13.9934 24.3968 13.8261 22.6242 14.1727 20.9159C14.5193 19.2076 15.3642 17.6403 16.6006 16.4117C17.8371 15.1831 19.4099 14.3483 21.1203 14.0127C22.8308 13.6771 24.6024 13.8557 26.2114 14.526C27.8205 15.1963 29.1949 16.3281 30.1613 17.7788C31.1277 19.2295 31.6427 20.9339 31.6413 22.677C31.6578 23.844 31.4391 25.0024 30.9983 26.083C30.5576 27.1637 29.9037 28.1446 29.0758 28.9672C28.2479 29.7898 27.2629 30.4374 26.1794 30.8712C25.0959 31.305 23.9361 31.5162 22.7693 31.4923ZM87.1024 87.1095H71.7431V60.4436C71.7431 52.5794 68.4001 50.152 64.0847 50.152C59.528 50.152 55.0565 53.5873 55.0565 60.6423V87.1095H39.6901V38.2918H54.4674V45.0559H54.6661C56.1495 42.0536 61.345 36.922 69.2731 36.922C77.847 36.922 87.1095 42.011 87.1095 56.9161L87.1024 87.1095Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

const FacebookIcon = () => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 103 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1177_3330)">
        <path
          d="M102.206 51.1031C102.206 22.8796 79.3266 0 51.1031 0C22.8796 0 0 22.8796 0 51.1031C0 76.6097 18.6876 97.7516 43.1182 101.585V65.8751H30.1428V51.1031H43.1182V39.8444C43.1182 27.0367 50.7478 19.9621 62.4206 19.9621C68.01 19.9621 73.8599 20.9603 73.8599 20.9603V33.5364H67.4162C61.0682 33.5364 59.0879 37.4759 59.0879 41.5213V51.1031H73.2611L70.9954 65.8751H59.0879V101.585C83.5186 97.7516 102.206 76.6097 102.206 51.1031Z"
          fill="currentColor"
        />
        <path
          d="M70.9951 65.8751L73.2608 51.1031H59.0877V41.5213C59.0877 37.4799 61.0679 33.5364 67.4159 33.5364H73.8597V20.9603C73.8597 20.9603 68.0118 19.9622 62.4204 19.9622C50.7475 19.9622 43.118 27.0367 43.118 39.8445V51.1031H30.1426V65.8751H43.118V101.585C48.409 102.413 53.7966 102.413 59.0877 101.585V65.8751H70.9951Z"
          fill="#131313"
        />
      </g>
    </svg>
  );
};

export default ContactUs;