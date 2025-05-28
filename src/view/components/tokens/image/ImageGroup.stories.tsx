import { useState } from 'react';
import {ImageOptionGroup} from "@view/components/tokens/image/variants/ImageOptionGroup";
import {ImageOptionList} from "@view/components/tokens/image/variants/ImageOptionList";

export default {
    title: 'Components/ImageOptionGroup',
    component: ImageOptionGroup,
};

export const Default = () => {
    const [selected, setSelected] = useState<string | undefined>(undefined);

    return (
        <ImageOptionGroup>
            <ImageOptionList
                selectedId={selected}
                onSelect={setSelected} images={[]}
            />
        </ImageOptionGroup>
    );
};