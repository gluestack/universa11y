import { useMode } from '@/components/ui/gluestack-ui-provider/providerContext';
import React from 'react';

function Expo1() {
  const { colorMode } = useMode();
  return colorMode === 'light' ? (
    <svg
      width={112}
      height={72}
      viewBox="0 0 112 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_10404_112250)">
        <rect width={112} height={72} rx={8} fill="white" />
        <path
          d="M30.7416 33.7781C30.7865 33.6983 30.8521 33.6326 30.9312 33.5879C31.0104 33.5433 31.1 33.5215 31.1905 33.525C31.2893 33.5199 31.3877 33.5405 31.4764 33.5848C31.5651 33.6291 31.6412 33.6956 31.6975 33.7781C32.8836 35.431 34.8409 38.723 36.2845 41.1503C37.2256 42.7339 37.949 43.9499 38.0983 44.1048C38.6554 44.6827 39.4188 44.3232 39.8631 43.6644C40.2157 43.2105 40.4118 42.6517 40.4214 42.0739C40.4214 41.7433 34.0901 29.7961 33.4521 28.802C32.838 27.8461 32.6386 27.6045 31.5938 27.6045H30.8031C29.7572 27.6045 29.6057 27.8461 28.9927 28.802C28.3547 29.8007 22.0234 41.7433 22.0234 42.0739C22.033 42.6517 22.2291 43.2105 22.5817 43.6644C23.0261 44.3232 23.7894 44.685 24.3465 44.1048C24.4947 43.9499 25.2181 42.7339 26.1604 41.1503C27.6062 38.7218 29.5556 35.4299 30.7416 33.7781Z"
          fill="#0072BC"
        />
        <path
          d="M47.6164 43V29.5223H55.7504V30.9701H49.2485V35.5241H55.3293V36.9719H49.2485V41.5522H55.8557V43H47.6164ZM59.6398 32.8917L62.0615 37.0245L64.4833 32.8917H66.2733L63.0092 37.9459L66.2733 43H64.4833L62.0615 39.0778L59.6398 43H57.8497L61.0612 37.9459L57.8497 32.8917H59.6398ZM68.4894 46.7906V32.8917H69.9899V34.4975H70.1741C70.2882 34.322 70.4461 34.0982 70.648 33.8262C70.8542 33.5498 71.1481 33.3041 71.5298 33.0892C71.9159 32.8698 72.438 32.7601 73.0961 32.7601C73.9472 32.7601 74.6974 32.9729 75.3467 33.3985C75.996 33.824 76.5028 34.4273 76.8669 35.2082C77.2311 35.9891 77.4131 36.9105 77.4131 37.9722C77.4131 39.0427 77.2311 39.9706 76.8669 40.7559C76.5028 41.5368 75.9982 42.1423 75.3533 42.5722C74.7084 42.9978 73.9647 43.2106 73.1224 43.2106C72.4731 43.2106 71.9532 43.1031 71.5627 42.8881C71.1722 42.6688 70.8717 42.4209 70.6611 42.1445C70.4505 41.8637 70.2882 41.6312 70.1741 41.4469H70.0425V46.7906H68.4894ZM70.0162 37.9459C70.0162 38.7093 70.1281 39.3827 70.3518 39.9662C70.5756 40.5453 70.9024 40.9994 71.3324 41.3285C71.7623 41.6531 72.2888 41.8154 72.9118 41.8154C73.5611 41.8154 74.1029 41.6443 74.5373 41.3021C74.976 40.9555 75.305 40.4905 75.5244 39.907C75.7482 39.3191 75.86 38.6654 75.86 37.9459C75.86 37.2351 75.7504 36.5946 75.531 36.0242C75.316 35.4495 74.9892 34.9954 74.5504 34.662C74.1161 34.3242 73.5699 34.1553 72.9118 34.1553C72.28 34.1553 71.7492 34.3154 71.3192 34.6357C70.8893 34.9516 70.5646 35.3947 70.3452 35.965C70.1259 36.531 70.0162 37.1913 70.0162 37.9459ZM83.8887 43.2106C82.9762 43.2106 82.1755 42.9934 81.4867 42.5591C80.8023 42.1247 80.267 41.5171 79.881 40.7362C79.4993 39.9552 79.3084 39.0427 79.3084 37.9985C79.3084 36.9456 79.4993 36.0264 79.881 35.2411C80.267 34.4558 80.8023 33.846 81.4867 33.4116C82.1755 32.9773 82.9762 32.7601 83.8887 32.7601C84.8013 32.7601 85.5998 32.9773 86.2842 33.4116C86.973 33.846 87.5082 34.4558 87.8899 35.2411C88.276 36.0264 88.469 36.9456 88.469 37.9985C88.469 39.0427 88.276 39.9552 87.8899 40.7362C87.5082 41.5171 86.973 42.1247 86.2842 42.5591C85.5998 42.9934 84.8013 43.2106 83.8887 43.2106ZM83.8887 41.8154C84.5819 41.8154 85.1523 41.6378 85.5998 41.2824C86.0473 40.927 86.3785 40.4598 86.5935 39.8807C86.8085 39.3015 86.916 38.6742 86.916 37.9985C86.916 37.3229 86.8085 36.6933 86.5935 36.1098C86.3785 35.5263 86.0473 35.0547 85.5998 34.6949C85.1523 34.3351 84.5819 34.1553 83.8887 34.1553C83.1956 34.1553 82.6252 34.3351 82.1777 34.6949C81.7302 35.0547 81.399 35.5263 81.184 36.1098C80.969 36.6933 80.8615 37.3229 80.8615 37.9985C80.8615 38.6742 80.969 39.3015 81.184 39.8807C81.399 40.4598 81.7302 40.927 82.1777 41.2824C82.6252 41.6378 83.1956 41.8154 83.8887 41.8154Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_10404_112250"
          x={0}
          y={0}
          width={112}
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
            result="effect1_innerShadow_10404_112250"
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
            result="effect1_innerShadow_10404_112250"
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
            in2="effect1_innerShadow_10404_112250"
            result="effect2_innerShadow_10404_112250"
          />
        </filter>
      </defs>
    </svg>
  ) : (
    <svg
      width={112}
      height={72}
      viewBox="0 0 112 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_10256_68778)">
        <rect
          width={112}
          height={72}
          rx={8}
          fill="#232123"
          fillOpacity="0.16"
        />
        <rect
          width={112}
          height={72}
          rx={8}
          fill="url(#paint0_radial_10256_68778)"
        />
        <path
          d="M30.7416 33.7781C30.7865 33.6983 30.8521 33.6326 30.9312 33.5879C31.0104 33.5433 31.1 33.5215 31.1905 33.525C31.2893 33.5199 31.3877 33.5405 31.4764 33.5848C31.5651 33.6291 31.6412 33.6956 31.6975 33.7781C32.8836 35.431 34.8409 38.723 36.2845 41.1503C37.2256 42.7339 37.949 43.9499 38.0983 44.1048C38.6554 44.6827 39.4188 44.3232 39.8631 43.6644C40.2157 43.2105 40.4118 42.6517 40.4214 42.0739C40.4214 41.7433 34.0901 29.7961 33.4521 28.802C32.838 27.8461 32.6386 27.6045 31.5938 27.6045H30.8031C29.7572 27.6045 29.6057 27.8461 28.9927 28.802C28.3547 29.8007 22.0234 41.7433 22.0234 42.0739C22.033 42.6517 22.2291 43.2105 22.5817 43.6644C23.0261 44.3232 23.7894 44.685 24.3465 44.1048C24.4947 43.9499 25.2181 42.7339 26.1604 41.1503C27.6062 38.7218 29.5556 35.4299 30.7416 33.7781Z"
          fill="#0072BC"
        />
        <path
          d="M47.6164 43V29.5223H55.7504V30.9701H49.2485V35.5241H55.3293V36.9719H49.2485V41.5522H55.8557V43H47.6164ZM59.6398 32.8917L62.0615 37.0245L64.4833 32.8917H66.2733L63.0092 37.9459L66.2733 43H64.4833L62.0615 39.0778L59.6398 43H57.8497L61.0612 37.9459L57.8497 32.8917H59.6398ZM68.4894 46.7906V32.8917H69.9899V34.4975H70.1741C70.2882 34.322 70.4461 34.0982 70.648 33.8262C70.8542 33.5498 71.1481 33.3041 71.5298 33.0892C71.9159 32.8698 72.438 32.7601 73.0961 32.7601C73.9472 32.7601 74.6974 32.9729 75.3467 33.3985C75.996 33.824 76.5028 34.4273 76.8669 35.2082C77.2311 35.9891 77.4131 36.9105 77.4131 37.9722C77.4131 39.0427 77.2311 39.9706 76.8669 40.7559C76.5028 41.5368 75.9982 42.1423 75.3533 42.5722C74.7084 42.9978 73.9647 43.2106 73.1224 43.2106C72.4731 43.2106 71.9532 43.1031 71.5627 42.8881C71.1722 42.6688 70.8717 42.4209 70.6611 42.1445C70.4505 41.8637 70.2882 41.6312 70.1741 41.4469H70.0425V46.7906H68.4894ZM70.0162 37.9459C70.0162 38.7093 70.1281 39.3827 70.3518 39.9662C70.5756 40.5453 70.9024 40.9994 71.3324 41.3285C71.7623 41.6531 72.2888 41.8154 72.9118 41.8154C73.5611 41.8154 74.1029 41.6443 74.5373 41.3021C74.976 40.9555 75.305 40.4905 75.5244 39.907C75.7482 39.3191 75.86 38.6654 75.86 37.9459C75.86 37.2351 75.7504 36.5946 75.531 36.0242C75.316 35.4495 74.9892 34.9954 74.5504 34.662C74.1161 34.3242 73.5699 34.1553 72.9118 34.1553C72.28 34.1553 71.7492 34.3154 71.3192 34.6357C70.8893 34.9516 70.5646 35.3947 70.3452 35.965C70.1259 36.531 70.0162 37.1913 70.0162 37.9459ZM83.8887 43.2106C82.9762 43.2106 82.1755 42.9934 81.4867 42.5591C80.8023 42.1247 80.267 41.5171 79.881 40.7362C79.4993 39.9552 79.3084 39.0427 79.3084 37.9985C79.3084 36.9456 79.4993 36.0264 79.881 35.2411C80.267 34.4558 80.8023 33.846 81.4867 33.4116C82.1755 32.9773 82.9762 32.7601 83.8887 32.7601C84.8013 32.7601 85.5998 32.9773 86.2842 33.4116C86.973 33.846 87.5082 34.4558 87.8899 35.2411C88.276 36.0264 88.469 36.9456 88.469 37.9985C88.469 39.0427 88.276 39.9552 87.8899 40.7362C87.5082 41.5171 86.973 42.1247 86.2842 42.5591C85.5998 42.9934 84.8013 43.2106 83.8887 43.2106ZM83.8887 41.8154C84.5819 41.8154 85.1523 41.6378 85.5998 41.2824C86.0473 40.927 86.3785 40.4598 86.5935 39.8807C86.8085 39.3015 86.916 38.6742 86.916 37.9985C86.916 37.3229 86.8085 36.6933 86.5935 36.1098C86.3785 35.5263 86.0473 35.0547 85.5998 34.6949C85.1523 34.3351 84.5819 34.1553 83.8887 34.1553C83.1956 34.1553 82.6252 34.3351 82.1777 34.6949C81.7302 35.0547 81.399 35.5263 81.184 36.1098C80.969 36.6933 80.8615 37.3229 80.8615 37.9985C80.8615 38.6742 80.969 39.3015 81.184 39.8807C81.399 40.4598 81.7302 40.927 82.1777 41.2824C82.6252 41.6378 83.1956 41.8154 83.8887 41.8154Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_10256_68778"
          x={0}
          y={0}
          width={112}
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
            result="effect1_innerShadow_10256_68778"
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
            result="effect1_innerShadow_10256_68778"
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
            in2="effect1_innerShadow_10256_68778"
            result="effect2_innerShadow_10256_68778"
          />
        </filter>
        {/* <radialGradient
          id="paint0_radial_10256_68778"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(56 36) rotate(32.7352) scale(66.5733 60.5649)"
        >
          <stop stopColor="white" stopOpacity="0.08" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </radialGradient> */}
      </defs>
    </svg>
  );
}

export default Expo1;
