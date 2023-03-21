import { NavMenu, NavMenuItem, Section } from 'astro-boilerplate-components';

import { Logo } from '@/components/Logo';
import { NavbarTwoColumns } from '@/components/NavbarTwoColumns';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              width="60"
              height="60"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M23 15.5H24C24.513 15.5 24.936 15.886 24.993 16.383L25 16.5V18.5H26V16.5C26 16.027 26.329 15.63 26.771 15.526L26.883 15.507L27 15.5H31C31.513 15.5 31.936 15.886 31.993 16.383L32 16.5V21.5C32 21.658 31.963 21.813 31.892 21.953L31.832 22.055L30 24.802V36.5C30 36.973 29.671 37.37 29.229 37.474L29.117 37.493L29 37.5H15C14.487 37.5 14.064 37.114 14.007 36.617L14 36.5V24.804L12.168 22.055C12.102 21.956 12.055 21.847 12.028 21.733L12.007 21.618L12 21.5V16.5C12 15.987 12.386 15.564 12.883 15.507L13 15.5H17C17.513 15.5 17.936 15.886 17.993 16.383L18 16.5V18.5H19V16.5C19 16.027 19.329 15.63 19.771 15.526L19.883 15.507L20 15.5H21H23ZM16 17.5H14V21.197L15.832 23.945C15.898 24.044 15.945 24.153 15.972 24.267L15.993 24.382L16 24.5V35.5H18V31.5C18 29.358 19.684 27.609 21.8 27.505L22 27.5C24.142 27.5 25.891 29.184 25.995 31.3L26 31.5V35.5H28V27.5H26V25.5H28V24.5C28 24.382 28.021 24.265 28.062 24.155L28.108 24.047L28.168 23.945L30 21.196V17.5H28V19.5C28 19.973 27.671 20.37 27.229 20.474L27.117 20.493L27 20.5H24C23.487 20.5 23.064 20.114 23.007 19.617L23 19.5V17.5H21V19.5C21 19.973 20.671 20.37 20.229 20.474L20.117 20.493L20 20.5H17C16.487 20.5 16.064 20.114 16.007 19.617L16 19.5V17.5ZM22 29.5C20.946 29.5 20.082 30.316 20.005 31.351L20 31.5V35.5H24V31.5C24 30.498 23.264 29.669 22.303 29.523L22.149 29.505L22 29.5ZM26 24.5H23V22.5H26V24.5Z"
                  fill="#DDF0FA"
                />
                <path
                  d="M22.25 16.25V8.562"
                  stroke="#DDF0FA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.385 12.504H22.375V8.498H27.385V12.504Z"
                  stroke="#DDF0FA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          }
          name="Unreachable Castle"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts">All the art</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
