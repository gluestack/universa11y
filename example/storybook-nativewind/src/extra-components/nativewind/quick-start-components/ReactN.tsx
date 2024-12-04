import { useMode } from '@/components/ui/gluestack-ui-provider/providerContext';
import React from 'react';

function ReactN() {
  const { colorMode } = useMode();
  return colorMode === 'light' ? (
    <svg
      width={167}
      height={72}
      viewBox="0 0 167 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_10404_112255)">
        <rect width={167} height={72} rx={8} fill="white" />
        <g clipPath="url(#clip0_10404_112255)">
          <mask
            id="mask0_10404_112255"
            maskUnits="userSpaceOnUse"
            x={18}
            y={26}
            width={23}
            height={20}
          >
            <path d="M40.9104 26H18.7109V46H40.9104V26Z" fill="white" />
          </mask>
          <g mask="url(#mask0_10404_112255)">
            <path
              d="M29.8174 38.1164C30.985 38.1164 31.9316 37.1688 31.9316 36C31.9316 34.8311 30.985 33.8836 29.8174 33.8836C28.6497 33.8836 27.7031 34.8311 27.7031 36C27.7031 37.1688 28.6497 38.1164 29.8174 38.1164Z"
              fill="#149ECA"
            />
            <path
              d="M29.8134 40.7627C35.6517 40.7627 40.3846 38.6308 40.3846 36.0008C40.3846 33.3709 35.6517 31.2389 29.8134 31.2389C23.9751 31.2389 19.2422 33.3709 19.2422 36.0008C19.2422 38.6308 23.9751 40.7627 29.8134 40.7627Z"
              stroke="#149ECA"
              strokeWidth="1.05819"
            />
            <path
              d="M25.6914 38.3822C28.6106 43.4435 32.8215 46.4805 35.0968 45.1655C37.372 43.8506 36.85 38.6816 33.9309 33.6203C31.0117 28.559 26.8008 25.5219 24.5256 26.8369C22.2503 28.1519 22.7723 33.3209 25.6914 38.3822Z"
              stroke="#149ECA"
              strokeWidth="1.05819"
            />
            <path
              d="M25.6914 33.6198C22.7723 38.6811 22.2503 43.8501 24.5256 45.1651C26.8008 46.4801 31.0117 43.443 33.9309 38.3817C36.85 33.3204 37.372 28.1514 35.0968 26.8365C32.8215 25.5215 28.6106 28.5585 25.6914 33.6198Z"
              stroke="#149ECA"
              strokeWidth="1.05819"
            />
          </g>
        </g>
        <path
          d="M47.7894 42V29.6747H51.954C52.9169 29.6747 53.7073 29.8392 54.3252 30.1681C54.9431 30.4931 55.4005 30.9405 55.6974 31.5102C55.9943 32.0799 56.1427 32.7279 56.1427 33.4541C56.1427 34.1803 55.9943 34.8243 55.6974 35.386C55.4005 35.9477 54.9451 36.389 54.3312 36.71C53.7174 37.0269 52.933 37.1854 51.9781 37.1854H48.6079V35.8373H51.9299C52.5879 35.8373 53.1175 35.741 53.5188 35.5485C53.924 35.3559 54.2169 35.083 54.3974 34.73C54.582 34.3729 54.6743 33.9476 54.6743 33.4541C54.6743 32.9606 54.582 32.5293 54.3974 32.1602C54.2129 31.7911 53.918 31.5062 53.5127 31.3056C53.1075 31.101 52.5719 30.9987 51.9059 30.9987H49.2819V42H47.7894ZM53.591 36.4632L56.6242 42H54.8909L51.9059 36.4632H53.591ZM62.2136 42.1926C61.3229 42.1926 60.5546 41.996 59.9086 41.6028C59.2667 41.2056 58.7712 40.6519 58.4221 39.9418C58.0771 39.2276 57.9045 38.3971 57.9045 37.4502C57.9045 36.5033 58.0771 35.6688 58.4221 34.9466C58.7712 34.2204 59.2566 33.6547 59.8785 33.2495C60.5044 32.8402 61.2346 32.6356 62.0692 32.6356C62.5506 32.6356 63.0261 32.7159 63.4955 32.8764C63.9649 33.0368 64.3922 33.2976 64.7774 33.6587C65.1625 34.0158 65.4695 34.4892 65.6982 35.079C65.9269 35.6688 66.0412 36.395 66.0412 37.2576V37.8595H58.9156V36.6317H64.5968C64.5968 36.1102 64.4925 35.6447 64.2839 35.2355C64.0793 34.8263 63.7864 34.5033 63.4052 34.2666C63.0281 34.0298 62.5827 33.9115 62.0692 33.9115C61.5035 33.9115 61.014 34.0519 60.6007 34.3328C60.1915 34.6096 59.8765 34.9707 59.6559 35.416C59.4352 35.8614 59.3249 36.3388 59.3249 36.8484V37.6669C59.3249 38.365 59.4452 38.9568 59.6859 39.4422C59.9307 39.9237 60.2697 40.2908 60.703 40.5436C61.1363 40.7923 61.6399 40.9167 62.2136 40.9167C62.5867 40.9167 62.9238 40.8646 63.2247 40.7602C63.5296 40.6519 63.7924 40.4914 64.0131 40.2788C64.2337 40.0621 64.4042 39.7933 64.5246 39.4723L65.8968 39.8575C65.7523 40.3229 65.5096 40.7322 65.1686 41.0852C64.8275 41.4343 64.4062 41.7071 63.9047 41.9037C63.4032 42.0963 62.8395 42.1926 62.2136 42.1926ZM70.922 42.2167C70.3362 42.2167 69.8046 42.1063 69.3272 41.8857C68.8497 41.661 68.4706 41.338 68.1897 40.9167C67.9089 40.4914 67.7684 39.9779 67.7684 39.376C67.7684 38.8464 67.8728 38.4171 68.0814 38.0881C68.29 37.7551 68.5689 37.4943 68.9179 37.3058C69.267 37.1172 69.6521 36.9768 70.0734 36.8845C70.4987 36.7882 70.926 36.712 71.3553 36.6558C71.917 36.5836 72.3724 36.5294 72.7214 36.4933C73.0745 36.4532 73.3313 36.387 73.4918 36.2947C73.6563 36.2024 73.7385 36.0419 73.7385 35.8133V35.7651C73.7385 35.1713 73.576 34.7099 73.251 34.3809C72.9301 34.0519 72.4426 33.8874 71.7886 33.8874C71.1106 33.8874 70.579 34.0359 70.1938 34.3328C69.8086 34.6297 69.5378 34.9466 69.3813 35.2836L68.0332 34.8022C68.274 34.2405 68.5949 33.8032 68.9962 33.4902C69.4014 33.1733 69.8427 32.9526 70.3202 32.8282C70.8016 32.6998 71.2751 32.6356 71.7405 32.6356C72.0374 32.6356 72.3784 32.6717 72.7636 32.744C73.1528 32.8122 73.5279 32.9546 73.889 33.1712C74.2541 33.3879 74.557 33.7149 74.7977 34.1522C75.0385 34.5895 75.1588 35.1753 75.1588 35.9095V42H73.7385V40.7482H73.6663C73.57 40.9488 73.4095 41.1635 73.1848 41.3922C72.9602 41.6209 72.6613 41.8154 72.2881 41.9759C71.915 42.1364 71.4596 42.2167 70.922 42.2167ZM71.1386 40.9408C71.7003 40.9408 72.1738 40.8305 72.559 40.6098C72.9481 40.3891 73.241 40.1043 73.4376 39.7552C73.6382 39.4061 73.7385 39.039 73.7385 38.6539V37.3539C73.6783 37.4261 73.5459 37.4923 73.3413 37.5525C73.1407 37.6087 72.908 37.6588 72.6432 37.703C72.3824 37.7431 72.1276 37.7792 71.8789 37.8113C71.6341 37.8394 71.4355 37.8635 71.2831 37.8835C70.914 37.9317 70.5689 38.0099 70.2479 38.1182C69.931 38.2226 69.6742 38.381 69.4776 38.5937C69.285 38.8023 69.1887 39.0872 69.1887 39.4483C69.1887 39.9418 69.3713 40.3149 69.7364 40.5677C70.1055 40.8164 70.5729 40.9408 71.1386 40.9408ZM81.5066 42.1926C80.6399 42.1926 79.8937 41.988 79.2678 41.5787C78.6419 41.1695 78.1604 40.6058 77.8234 39.8876C77.4864 39.1694 77.3179 38.3489 77.3179 37.4261C77.3179 36.4873 77.4904 35.6588 77.8354 34.9406C78.1845 34.2184 78.67 33.6547 79.2919 33.2495C79.9177 32.8402 80.648 32.6356 81.4825 32.6356C82.1325 32.6356 82.7182 32.756 83.2398 32.9967C83.7614 33.2374 84.1887 33.5745 84.5217 34.0078C84.8547 34.4411 85.0613 34.9466 85.1416 35.5244H83.7213C83.6129 35.1031 83.3722 34.73 82.9991 34.405C82.63 34.076 82.1325 33.9115 81.5066 33.9115C80.9529 33.9115 80.4674 34.0559 80.0501 34.3448C79.6369 34.6297 79.3139 35.0329 79.0812 35.5545C78.8525 36.072 78.7382 36.6799 78.7382 37.378C78.7382 38.0922 78.8505 38.714 79.0752 39.2436C79.3039 39.7733 79.6249 40.1845 80.0381 40.4774C80.4554 40.7703 80.9449 40.9167 81.5066 40.9167C81.8757 40.9167 82.2107 40.8525 82.5116 40.7241C82.8125 40.5957 83.0673 40.4112 83.2759 40.1705C83.4846 39.9297 83.633 39.6409 83.7213 39.3038H85.1416C85.0613 39.8495 84.8627 40.341 84.5458 40.7783C84.2328 41.2116 83.8176 41.5567 83.3 41.8134C82.7864 42.0662 82.1886 42.1926 81.5066 42.1926ZM91.2381 32.756V33.9596H86.4475V32.756H91.2381ZM87.8438 30.5413H89.2641V39.352C89.2641 39.7532 89.3222 40.0541 89.4386 40.2547C89.559 40.4513 89.7114 40.5837 89.896 40.6519C90.0846 40.7161 90.2832 40.7482 90.4918 40.7482C90.6483 40.7482 90.7767 40.7402 90.877 40.7241C90.9773 40.7041 91.0575 40.688 91.1177 40.676L91.4066 41.9519C91.3103 41.988 91.1759 42.0241 91.0033 42.0602C90.8308 42.1003 90.6122 42.1204 90.3474 42.1204C89.9461 42.1204 89.5529 42.0341 89.1678 41.8616C88.7866 41.6891 88.4697 41.4263 88.2169 41.0732C87.9681 40.7201 87.8438 40.2748 87.8438 39.7371V30.5413ZM108.107 29.6747V42H106.663L99.9464 32.3227H99.8261V42H98.3335V29.6747H99.7779L106.518 39.376H106.639V29.6747H108.107ZM113.621 42.2167C113.036 42.2167 112.504 42.1063 112.027 41.8857C111.549 41.661 111.17 41.338 110.889 40.9167C110.608 40.4914 110.468 39.9779 110.468 39.376C110.468 38.8464 110.572 38.4171 110.781 38.0881C110.989 37.7551 111.268 37.4943 111.617 37.3058C111.966 37.1172 112.352 36.9768 112.773 36.8845C113.198 36.7882 113.625 36.712 114.055 36.6558C114.616 36.5836 115.072 36.5294 115.421 36.4933C115.774 36.4532 116.031 36.387 116.191 36.2947C116.356 36.2024 116.438 36.0419 116.438 35.8133V35.7651C116.438 35.1713 116.275 34.7099 115.95 34.3809C115.629 34.0519 115.142 33.8874 114.488 33.8874C113.81 33.8874 113.278 34.0359 112.893 34.3328C112.508 34.6297 112.237 34.9466 112.081 35.2836L110.733 34.8022C110.973 34.2405 111.294 33.8032 111.696 33.4902C112.101 33.1733 112.542 32.9526 113.02 32.8282C113.501 32.6998 113.974 32.6356 114.44 32.6356C114.737 32.6356 115.078 32.6717 115.463 32.744C115.852 32.8122 116.227 32.9546 116.588 33.1712C116.953 33.3879 117.256 33.7149 117.497 34.1522C117.738 34.5895 117.858 35.1753 117.858 35.9095V42H116.438V40.7482H116.366C116.269 40.9488 116.109 41.1635 115.884 41.3922C115.66 41.6209 115.361 41.8154 114.988 41.9759C114.614 42.1364 114.159 42.2167 113.621 42.2167ZM113.838 40.9408C114.4 40.9408 114.873 40.8305 115.258 40.6098C115.648 40.3891 115.94 40.1043 116.137 39.7552C116.338 39.4061 116.438 39.039 116.438 38.6539V37.3539C116.378 37.4261 116.245 37.4923 116.041 37.5525C115.84 37.6087 115.607 37.6588 115.343 37.703C115.082 37.7431 114.827 37.7792 114.578 37.8113C114.334 37.8394 114.135 37.8635 113.982 37.8835C113.613 37.9317 113.268 38.0099 112.947 38.1182C112.63 38.2226 112.374 38.381 112.177 38.5937C111.984 38.8023 111.888 39.0872 111.888 39.4483C111.888 39.9418 112.071 40.3149 112.436 40.5677C112.805 40.8164 113.272 40.9408 113.838 40.9408ZM124.471 32.756V33.9596H119.68V32.756H124.471ZM121.076 30.5413H122.497V39.352C122.497 39.7532 122.555 40.0541 122.671 40.2547C122.792 40.4513 122.944 40.5837 123.129 40.6519C123.317 40.7161 123.516 40.7482 123.724 40.7482C123.881 40.7482 124.009 40.7402 124.11 40.7241C124.21 40.7041 124.29 40.688 124.35 40.676L124.639 41.9519C124.543 41.988 124.409 42.0241 124.236 42.0602C124.064 42.1003 123.845 42.1204 123.58 42.1204C123.179 42.1204 122.786 42.0341 122.4 41.8616C122.019 41.6891 121.702 41.4263 121.45 41.0732C121.201 40.7201 121.076 40.2748 121.076 39.7371V30.5413ZM126.607 42V32.756H128.028V42H126.607ZM127.329 31.2153C127.053 31.2153 126.814 31.121 126.613 30.9325C126.417 30.7439 126.318 30.5172 126.318 30.2524C126.318 29.9876 126.417 29.7609 126.613 29.5723C126.814 29.3838 127.053 29.2895 127.329 29.2895C127.606 29.2895 127.843 29.3838 128.04 29.5723C128.24 29.7609 128.34 29.9876 128.34 30.2524C128.34 30.5172 128.24 30.7439 128.04 30.9325C127.843 31.121 127.606 31.2153 127.329 31.2153ZM138.188 32.756L134.769 42H133.325L129.907 32.756H131.447L133.999 40.1223H134.095L136.647 32.756H138.188ZM143.607 42.1926C142.717 42.1926 141.948 41.996 141.302 41.6028C140.66 41.2056 140.165 40.6519 139.816 39.9418C139.471 39.2276 139.298 38.3971 139.298 37.4502C139.298 36.5033 139.471 35.6688 139.816 34.9466C140.165 34.2204 140.65 33.6547 141.272 33.2495C141.898 32.8402 142.628 32.6356 143.463 32.6356C143.944 32.6356 144.42 32.7159 144.889 32.8764C145.359 33.0368 145.786 33.2976 146.171 33.6587C146.556 34.0158 146.863 34.4892 147.092 35.079C147.32 35.6688 147.435 36.395 147.435 37.2576V37.8595H140.309V36.6317H145.99C145.99 36.1102 145.886 35.6447 145.678 35.2355C145.473 34.8263 145.18 34.5033 144.799 34.2666C144.422 34.0298 143.976 33.9115 143.463 33.9115C142.897 33.9115 142.408 34.0519 141.994 34.3328C141.585 34.6096 141.27 34.9707 141.049 35.416C140.829 35.8614 140.718 36.3388 140.718 36.8484V37.6669C140.718 38.365 140.839 38.9568 141.08 39.4422C141.324 39.9237 141.663 40.2908 142.097 40.5436C142.53 40.7923 143.033 40.9167 143.607 40.9167C143.98 40.9167 144.317 40.8646 144.618 40.7602C144.923 40.6519 145.186 40.4914 145.407 40.2788C145.627 40.0621 145.798 39.7933 145.918 39.4723L147.29 39.8575C147.146 40.3229 146.903 40.7322 146.562 41.0852C146.221 41.4343 145.8 41.7071 145.298 41.9037C144.797 42.0963 144.233 42.1926 143.607 42.1926Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_10404_112255"
          x={0}
          y={0}
          width={167}
          height={72}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={1}
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_10404_112255"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_10404_112255"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-1} dy={-1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_10404_112255"
            result="effect2_innerShadow_10404_112255"
          />
        </filter>
        <clipPath id="clip0_10404_112255">
          <rect
            width="22.5"
            height={20}
            fill="white"
            transform="translate(18.7109 26)"
          />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width={167}
      height={72}
      viewBox="0 0 167 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_10256_68839)">
        <rect width={167} height={72} rx={8} fill="white" fillOpacity="0.16" />
        <rect
          width={167}
          height={72}
          rx={8}
          fill="url(#paint0_radial_10256_68839)"
        />
        <path
          d="M29.9247 37.9695C31.0826 37.9695 32.0212 37.079 32.0212 35.9804C32.0212 34.8819 31.0826 33.9914 29.9247 33.9914C28.7668 33.9914 27.8281 34.8819 27.8281 35.9804C27.8281 37.079 28.7668 37.9695 29.9247 37.9695Z"
          fill="#00D8FF"
        />
        <path
          d="M29.9589 40.5357C27.4408 40.5941 24.929 40.2719 22.5177 39.5809C21.4034 39.2462 20.3641 38.7183 19.4526 38.0241C19.105 37.7872 18.8155 37.4819 18.6039 37.129C18.3922 36.7761 18.2635 36.384 18.2266 35.9795C18.2266 34.6642 19.7469 33.3766 22.298 32.5364C24.7732 31.7899 27.3591 31.4273 29.9561 31.4627C32.5187 31.4276 35.0706 31.7834 37.5142 32.5167C38.5865 32.842 39.5901 33.3435 40.4794 33.9985C40.8212 34.2247 41.1065 34.5193 41.3151 34.8617C41.5237 35.204 41.6505 35.5856 41.6866 35.9795C41.6866 37.3467 39.989 38.7291 37.2473 39.589C34.8833 40.2567 32.4251 40.576 29.9589 40.5357ZM29.9589 32.4138C27.4745 32.3826 25.0006 32.7263 22.63 33.4321C20.2835 34.2087 19.2348 35.2699 19.2348 35.9795C19.2348 36.7168 20.3665 37.8773 22.8469 38.6817C25.1537 39.3373 27.5554 39.6423 29.9627 39.5854C32.322 39.6269 34.674 39.3236 36.9361 38.6862C39.5127 37.8737 40.6897 36.7177 40.6897 35.9804C40.6477 35.7271 40.5505 35.4849 40.4044 35.2692C40.2582 35.0535 40.0663 34.8691 39.8409 34.7277C39.0462 34.1459 38.1502 33.7008 37.1936 33.4124C34.8531 32.7178 32.411 32.381 29.9589 32.4147V32.4138Z"
          fill="#00D8FF"
        />
        <path
          d="M25.2067 45.8928C24.8157 45.9016 24.4293 45.8114 24.0872 45.6315C22.8885 44.9738 22.4707 43.0805 22.9762 40.5644C24.1559 35.7774 26.7932 31.4252 30.5598 28.0492C31.3915 27.328 32.3513 26.7524 33.3948 26.3491C33.772 26.1819 34.1833 26.0952 34.5996 26.0952C35.016 26.0952 35.4273 26.1819 35.8045 26.3491C37.0532 27.0309 37.4663 29.1229 36.8815 31.801C36.3091 34.0779 35.3727 36.2584 34.105 38.2666C32.899 40.364 31.35 42.2666 29.5158 43.9037C28.6534 44.6514 27.6525 45.2411 26.5638 45.6431C26.1298 45.7992 25.6708 45.8836 25.2067 45.8928ZM26.2545 33.9717L26.6883 34.2097C25.4158 36.2349 24.4924 38.44 23.9533 40.7416C23.4902 43.059 23.9363 44.454 24.5795 44.8065C24.7709 44.9025 24.9856 44.9491 25.202 44.9416C26.5906 44.7611 27.8755 44.1447 28.8518 43.1906C30.6029 41.6222 32.0814 39.8009 33.2326 37.7942C34.4479 35.8752 35.3464 33.791 35.8969 31.614C36.4439 29.0907 35.9724 27.5454 35.2999 27.1768C35.0479 27.0854 34.7787 27.0446 34.5092 27.057C34.2398 27.0693 33.9759 27.1344 33.7343 27.2484C32.8059 27.6106 31.9522 28.1256 31.2125 28.7695C29.4076 30.3438 27.8793 32.1816 26.6855 34.2133L26.2545 33.9717Z"
          fill="#00D8FF"
        />
        <path
          d="M34.7117 45.9044C33.1668 45.7341 31.7284 45.0717 30.6318 44.0254C28.7102 42.3669 27.0843 40.4243 25.8172 38.2728C24.5005 36.1859 23.5452 33.912 22.9878 31.5379C22.7467 30.4945 22.7014 29.4189 22.8539 28.3605C22.8885 27.9663 23.0142 27.5841 23.222 27.2411C23.4298 26.8981 23.7147 26.6027 24.0564 26.3759C25.3004 25.6905 27.4177 26.3956 29.5727 28.2138C31.3654 29.821 32.8877 31.6796 34.0864 33.7247C35.4013 35.763 36.3656 37.9869 36.9431 40.3129C37.1944 41.3957 37.2341 42.513 37.0601 43.6093C37.0182 44.0137 36.8846 44.4047 36.6684 44.7554C36.4522 45.1062 36.1585 45.4084 35.8076 45.6413C35.4737 45.8204 35.0952 45.9113 34.7117 45.9044ZM26.6858 37.7986C27.901 39.8547 29.4544 41.7136 31.2873 43.3051C33.1735 44.8423 34.6655 45.1751 35.3125 44.8181C35.9849 44.4495 36.4772 42.9391 35.9727 40.4999C35.4133 38.2774 34.4874 36.1527 33.2291 34.2043C32.0837 32.2459 30.6289 30.4656 28.9153 28.9251C26.8857 27.2134 25.2372 26.8296 24.5685 27.1982C24.3585 27.3595 24.1862 27.5604 24.0625 27.7882C23.9388 28.016 23.8663 28.2658 23.8498 28.5216C23.7171 29.4657 23.7608 30.4247 23.9791 31.3545C24.5146 33.6253 25.4297 35.8003 26.6896 37.7968L26.6858 37.7986Z"
          fill="#00D8FF"
        />
        <path
          d="M48.266 42V29.6747H52.4306C53.3935 29.6747 54.1839 29.8392 54.8018 30.1681C55.4196 30.4931 55.877 30.9405 56.1739 31.5102C56.4708 32.0799 56.6193 32.7279 56.6193 33.4541C56.6193 34.1803 56.4708 34.8243 56.1739 35.386C55.877 35.9477 55.4216 36.389 54.8078 36.71C54.1939 37.0269 53.4095 37.1854 52.4547 37.1854H49.0844V35.8373H52.4065C53.0645 35.8373 53.5941 35.741 53.9953 35.5485C54.4005 35.3559 54.6934 35.083 54.874 34.73C55.0585 34.3729 55.1508 33.9476 55.1508 33.4541C55.1508 32.9606 55.0585 32.5293 54.874 32.1602C54.6894 31.7911 54.3945 31.5062 53.9893 31.3056C53.5841 31.101 53.0485 30.9987 52.3824 30.9987H49.7585V42H48.266ZM54.0675 36.4632L57.1007 42H55.3675L52.3824 36.4632H54.0675ZM62.6902 42.1926C61.7995 42.1926 61.0311 41.996 60.3852 41.6028C59.7432 41.2056 59.2477 40.6519 58.8987 39.9418C58.5536 39.2276 58.3811 38.3971 58.3811 37.4502C58.3811 36.5033 58.5536 35.6688 58.8987 34.9466C59.2477 34.2204 59.7332 33.6547 60.3551 33.2495C60.981 32.8402 61.7112 32.6356 62.5457 32.6356C63.0272 32.6356 63.5026 32.7159 63.9721 32.8764C64.4415 33.0368 64.8688 33.2976 65.2539 33.6587C65.6391 34.0158 65.946 34.4892 66.1747 35.079C66.4034 35.6688 66.5178 36.395 66.5178 37.2576V37.8595H59.3922V36.6317H65.0734C65.0734 36.1102 64.9691 35.6447 64.7604 35.2355C64.5558 34.8263 64.2629 34.5033 63.8818 34.2666C63.5046 34.0298 63.0593 33.9115 62.5457 33.9115C61.98 33.9115 61.4905 34.0519 61.0773 34.3328C60.668 34.6096 60.3531 34.9707 60.1324 35.416C59.9117 35.8614 59.8014 36.3388 59.8014 36.8484V37.6669C59.8014 38.365 59.9218 38.9568 60.1625 39.4422C60.4072 39.9237 60.7463 40.2908 61.1796 40.5436C61.6129 40.7923 62.1164 40.9167 62.6902 40.9167C63.0633 40.9167 63.4003 40.8646 63.7012 40.7602C64.0062 40.6519 64.269 40.4914 64.4896 40.2788C64.7103 40.0621 64.8808 39.7933 65.0012 39.4723L66.3733 39.8575C66.2289 40.3229 65.9862 40.7322 65.6451 41.0852C65.3041 41.4343 64.8828 41.7071 64.3813 41.9037C63.8798 42.0963 63.3161 42.1926 62.6902 42.1926ZM71.3986 42.2167C70.8128 42.2167 70.2812 42.1063 69.8037 41.8857C69.3263 41.661 68.9471 41.338 68.6663 40.9167C68.3854 40.4914 68.245 39.9779 68.245 39.376C68.245 38.8464 68.3493 38.4171 68.5579 38.0881C68.7666 37.7551 69.0454 37.4943 69.3945 37.3058C69.7435 37.1172 70.1287 36.9768 70.55 36.8845C70.9753 36.7882 71.4026 36.712 71.8319 36.6558C72.3936 36.5836 72.8489 36.5294 73.198 36.4933C73.5511 36.4532 73.8079 36.387 73.9683 36.2947C74.1328 36.2024 74.2151 36.0419 74.2151 35.8133V35.7651C74.2151 35.1713 74.0526 34.7099 73.7276 34.3809C73.4066 34.0519 72.9192 33.8874 72.2652 33.8874C71.5871 33.8874 71.0555 34.0359 70.6703 34.3328C70.2852 34.6297 70.0144 34.9466 69.8579 35.2836L68.5098 34.8022C68.7505 34.2405 69.0715 33.8032 69.4727 33.4902C69.8779 33.1733 70.3193 32.9526 70.7967 32.8282C71.2782 32.6998 71.7516 32.6356 72.217 32.6356C72.5139 32.6356 72.855 32.6717 73.2401 32.744C73.6293 32.8122 74.0044 32.9546 74.3655 33.1712C74.7307 33.3879 75.0336 33.7149 75.2743 34.1522C75.515 34.5895 75.6354 35.1753 75.6354 35.9095V42H74.2151V40.7482H74.1429C74.0466 40.9488 73.8861 41.1635 73.6614 41.3922C73.4367 41.6209 73.1378 41.8154 72.7647 41.9759C72.3916 42.1364 71.9362 42.2167 71.3986 42.2167ZM71.6152 40.9408C72.1769 40.9408 72.6503 40.8305 73.0355 40.6098C73.4247 40.3891 73.7176 40.1043 73.9142 39.7552C74.1148 39.4061 74.2151 39.039 74.2151 38.6539V37.3539C74.1549 37.4261 74.0225 37.4923 73.8179 37.5525C73.6173 37.6087 73.3846 37.6588 73.1198 37.703C72.859 37.7431 72.6042 37.7792 72.3555 37.8113C72.1107 37.8394 71.9121 37.8635 71.7596 37.8835C71.3905 37.9317 71.0455 38.0099 70.7245 38.1182C70.4076 38.2226 70.1508 38.381 69.9542 38.5937C69.7616 38.8023 69.6653 39.0872 69.6653 39.4483C69.6653 39.9418 69.8479 40.3149 70.213 40.5677C70.5821 40.8164 71.0495 40.9408 71.6152 40.9408ZM81.9831 42.1926C81.1165 42.1926 80.3702 41.988 79.7443 41.5787C79.1184 41.1695 78.637 40.6058 78.3 39.8876C77.9629 39.1694 77.7944 38.3489 77.7944 37.4261C77.7944 36.4873 77.967 35.6588 78.312 34.9406C78.6611 34.2184 79.1465 33.6547 79.7684 33.2495C80.3943 32.8402 81.1245 32.6356 81.9591 32.6356C82.609 32.6356 83.1948 32.756 83.7164 32.9967C84.238 33.2374 84.6653 33.5745 84.9983 34.0078C85.3313 34.4411 85.5379 34.9466 85.6181 35.5244H84.1978C84.0895 35.1031 83.8488 34.73 83.4756 34.405C83.1065 34.076 82.609 33.9115 81.9831 33.9115C81.4294 33.9115 80.944 34.0559 80.5267 34.3448C80.1135 34.6297 79.7905 35.0329 79.5578 35.5545C79.3291 36.072 79.2147 36.6799 79.2147 37.378C79.2147 38.0922 79.3271 38.714 79.5518 39.2436C79.7805 39.7733 80.1014 40.1845 80.5147 40.4774C80.9319 40.7703 81.4214 40.9167 81.9831 40.9167C82.3522 40.9167 82.6873 40.8525 82.9882 40.7241C83.2891 40.5957 83.5439 40.4112 83.7525 40.1705C83.9611 39.9297 84.1096 39.6409 84.1978 39.3038H85.6181C85.5379 39.8495 85.3393 40.341 85.0223 40.7783C84.7094 41.2116 84.2941 41.5567 83.7766 41.8134C83.263 42.0662 82.6652 42.1926 81.9831 42.1926ZM91.7146 32.756V33.9596H86.9241V32.756H91.7146ZM88.3203 30.5413H89.7406V39.352C89.7406 39.7532 89.7988 40.0541 89.9152 40.2547C90.0355 40.4513 90.188 40.5837 90.3725 40.6519C90.5611 40.7161 90.7597 40.7482 90.9684 40.7482C91.1248 40.7482 91.2532 40.7402 91.3535 40.7241C91.4538 40.7041 91.5341 40.688 91.5942 40.676L91.8831 41.9519C91.7868 41.988 91.6524 42.0241 91.4799 42.0602C91.3074 42.1003 91.0887 42.1204 90.8239 42.1204C90.4227 42.1204 90.0295 42.0341 89.6443 41.8616C89.2632 41.6891 88.9462 41.4263 88.6935 41.0732C88.4447 40.7201 88.3203 40.2748 88.3203 39.7371V30.5413ZM108.584 29.6747V42H107.139L100.423 32.3227H100.303V42H98.8101V29.6747H100.254L106.995 39.376H107.115V29.6747H108.584ZM114.098 42.2167C113.512 42.2167 112.981 42.1063 112.503 41.8857C112.026 41.661 111.647 41.338 111.366 40.9167C111.085 40.4914 110.944 39.9779 110.944 39.376C110.944 38.8464 111.049 38.4171 111.257 38.0881C111.466 37.7551 111.745 37.4943 112.094 37.3058C112.443 37.1172 112.828 36.9768 113.249 36.8845C113.675 36.7882 114.102 36.712 114.531 36.6558C115.093 36.5836 115.548 36.5294 115.897 36.4933C116.25 36.4532 116.507 36.387 116.668 36.2947C116.832 36.2024 116.914 36.0419 116.914 35.8133V35.7651C116.914 35.1713 116.752 34.7099 116.427 34.3809C116.106 34.0519 115.619 33.8874 114.965 33.8874C114.287 33.8874 113.755 34.0359 113.37 34.3328C112.985 34.6297 112.714 34.9466 112.557 35.2836L111.209 34.8022C111.45 34.2405 111.771 33.8032 112.172 33.4902C112.577 33.1733 113.019 32.9526 113.496 32.8282C113.978 32.6998 114.451 32.6356 114.916 32.6356C115.213 32.6356 115.554 32.6717 115.94 32.744C116.329 32.8122 116.704 32.9546 117.065 33.1712C117.43 33.3879 117.733 33.7149 117.974 34.1522C118.214 34.5895 118.335 35.1753 118.335 35.9095V42H116.914V40.7482H116.842C116.746 40.9488 116.585 41.1635 116.361 41.3922C116.136 41.6209 115.837 41.8154 115.464 41.9759C115.091 42.1364 114.636 42.2167 114.098 42.2167ZM114.315 40.9408C114.876 40.9408 115.35 40.8305 115.735 40.6098C116.124 40.3891 116.417 40.1043 116.614 39.7552C116.814 39.4061 116.914 39.039 116.914 38.6539V37.3539C116.854 37.4261 116.722 37.4923 116.517 37.5525C116.317 37.6087 116.084 37.6588 115.819 37.703C115.558 37.7431 115.304 37.7792 115.055 37.8113C114.81 37.8394 114.611 37.8635 114.459 37.8835C114.09 37.9317 113.745 38.0099 113.424 38.1182C113.107 38.2226 112.85 38.381 112.654 38.5937C112.461 38.8023 112.365 39.0872 112.365 39.4483C112.365 39.9418 112.547 40.3149 112.912 40.5677C113.281 40.8164 113.749 40.9408 114.315 40.9408ZM124.947 32.756V33.9596H120.157V32.756H124.947ZM121.553 30.5413H122.973V39.352C122.973 39.7532 123.032 40.0541 123.148 40.2547C123.268 40.4513 123.421 40.5837 123.605 40.6519C123.794 40.7161 123.992 40.7482 124.201 40.7482C124.358 40.7482 124.486 40.7402 124.586 40.7241C124.687 40.7041 124.767 40.688 124.827 40.676L125.116 41.9519C125.02 41.988 124.885 42.0241 124.713 42.0602C124.54 42.1003 124.321 42.1204 124.057 42.1204C123.655 42.1204 123.262 42.0341 122.877 41.8616C122.496 41.6891 122.179 41.4263 121.926 41.0732C121.677 40.7201 121.553 40.2748 121.553 39.7371V30.5413ZM127.084 42V32.756H128.504V42H127.084ZM127.806 31.2153C127.529 31.2153 127.29 31.121 127.09 30.9325C126.893 30.7439 126.795 30.5172 126.795 30.2524C126.795 29.9876 126.893 29.7609 127.09 29.5723C127.29 29.3838 127.529 29.2895 127.806 29.2895C128.083 29.2895 128.32 29.3838 128.516 29.5723C128.717 29.7609 128.817 29.9876 128.817 30.2524C128.817 30.5172 128.717 30.7439 128.516 30.9325C128.32 31.121 128.083 31.2153 127.806 31.2153ZM138.664 32.756L135.246 42H133.802L130.383 32.756H131.924L134.476 40.1223H134.572L137.124 32.756H138.664ZM144.084 42.1926C143.193 42.1926 142.425 41.996 141.779 41.6028C141.137 41.2056 140.641 40.6519 140.292 39.9418C139.947 39.2276 139.775 38.3971 139.775 37.4502C139.775 36.5033 139.947 35.6688 140.292 34.9466C140.641 34.2204 141.127 33.6547 141.749 33.2495C142.375 32.8402 143.105 32.6356 143.939 32.6356C144.421 32.6356 144.896 32.7159 145.366 32.8764C145.835 33.0368 146.262 33.2976 146.648 33.6587C147.033 34.0158 147.34 34.4892 147.568 35.079C147.797 35.6688 147.911 36.395 147.911 37.2576V37.8595H140.786V36.6317H146.467C146.467 36.1102 146.363 35.6447 146.154 35.2355C145.949 34.8263 145.657 34.5033 145.275 34.2666C144.898 34.0298 144.453 33.9115 143.939 33.9115C143.374 33.9115 142.884 34.0519 142.471 34.3328C142.062 34.6096 141.747 34.9707 141.526 35.416C141.305 35.8614 141.195 36.3388 141.195 36.8484V37.6669C141.195 38.365 141.315 38.9568 141.556 39.4422C141.801 39.9237 142.14 40.2908 142.573 40.5436C143.007 40.7923 143.51 40.9167 144.084 40.9167C144.457 40.9167 144.794 40.8646 145.095 40.7602C145.4 40.6519 145.663 40.4914 145.883 40.2788C146.104 40.0621 146.274 39.7933 146.395 39.4723L147.767 39.8575C147.623 40.3229 147.38 40.7322 147.039 41.0852C146.698 41.4343 146.276 41.7071 145.775 41.9037C145.273 42.0963 144.71 42.1926 144.084 42.1926Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_10256_68839"
          x={0}
          y={0}
          width={167}
          height={72}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={1}
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_10256_68839"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_10256_68839"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-1} dy={-1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_10256_68839"
            result="effect2_innerShadow_10256_68839"
          />
        </filter>
        <radialGradient
          id="paint0_radial_10256_68839"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(83.5 36) rotate(23.3227) scale(90.9299 66.1169)"
        >
          <stop stopColor="white" stopOpacity="0.08" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default ReactN;
