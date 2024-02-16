import React, { useEffect, useState } from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'logotype' | string;
}

const Icon: React.VFC<IconProps> = ({ name, ...restProps }) => {
  const [iconComponent, setIconComponent] = useState<React.FC<
    React.SVGProps<SVGSVGElement>
  > | null>(null);

  useEffect(() => {
    const importIcon = async () => {
      try {
        const { default: IconComponent } = await import(
          `@svgr/webpack!public/icons/${name}.svg`
        );
        setIconComponent(() => IconComponent);
      } catch (error) {
        console.error(`Icon with name: ${name} not found!`, error);
      }
    };

    importIcon();

    return () => {
      setIconComponent(null);
    };
  }, [name]);

  if (!iconComponent) {
    return null;
  }

  const IconComponent = iconComponent;

  return <IconComponent {...restProps} />;
};

export default Icon;
