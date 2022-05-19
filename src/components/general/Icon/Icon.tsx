import React, { cloneElement, SVGProps, useEffect, useState } from 'react';
import { useAsync } from 'react-use';

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: 'logotype' | string;
}

const Icon: React.VFC<IconProps> = props => {
  const { name, ...restProps } = props;

  const [iconModule, setIconModule] = useState(() => <svg {...restProps} />);

  useAsync(async () => {
    const module = await import(`@svgr/webpack!public/icons/${name}.svg`).catch(
      () => console.error(`Icon with name: ${name} not found!`)
    );

    if (module) {
      setIconModule(module.ReactComponent({}));
    }
  }, [name]);

  useEffect(() => {
    return () => {
      setIconModule(<></>);
    };
  }, []);

  return cloneElement(iconModule, { ...restProps });
};

export default Icon;
