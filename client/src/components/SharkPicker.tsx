import { Text, ActionButton, Picker, Item, Content, Flex, View, Well } from "@adobe/react-spectrum";
import great_white from "../assets/images/sharks/great_white.jpg";
import hammerhead from "../assets/images/sharks/hammerhead.jpeg";
import ChevronLeft from "@spectrum-icons/workflow/ChevronLeft";
import ChevronRight from "@spectrum-icons/workflow/ChevronRight";
import React from "react";
import { useMemo } from "react";

interface Shark {
    key: string,
    alt: string,
    src: string,
    desc: string
}

export const sharks: Shark[] = [
    {
        key: "great_white",
        alt: "Great White Shark",
        src: great_white,
        desc: 'Male great whites on average measure 3.4 to 4.0 m (11 to 13 ft) long, while females at 4.6 to 4.9 m (15 to 16 ft). Adults of this species weigh 522–771 kg (1,151–1,700 lb) on average. Great whites are commonly found in all major oceans.'
    },
    {
        key: "hammerhead",
        alt: "Hammerhead Shark",
        src: hammerhead,
        desc: ''
    },
    // {
    //     key: "mako",
    //     src: { hammerhead },
    //     desc: ''
    // },
    // {
    //     key: "blue",
    //     src: { hammerhead },
    //     desc: ''
    // },
    // {
    //     key: "blue",
    //     src: { hammerhead },
    //     desc: ''
    // },
    // {
    //     key: 'soup_fin',
    //     src: { hammerhead },
    //     desc: ''
    // },
    // {
    //     key: "six_gill",
    //     src: { hammerhead },
    //     desc: ''
    // },
]

export const SharkImageCarousel = (shark_id: Shark, left: (() => void) | null, right: (() => void) | null) => {
    return (
        <Flex direction="column">

            <img
                src={shark_id.src}
                alt={shark_id.alt}
                height="auto"
                width="100%"
            />
            <Well>{shark_id.desc}</Well>
            <Flex direction="row">
                <ActionButton
                    isQuiet
                    isDisabled={left == null}
                    onPress={left!}
                >
                    <ChevronLeft />
                </ActionButton>
                <View flex />
                <ActionButton
                    isQuiet
                    isDisabled={right == null}
                    onPress={right!}
                >

                    <ChevronRight />
                </ActionButton>
            </Flex>

        </Flex>
    );
};

export const SharkPicker = () => {
    let [shark_index, set_shark_index] = React.useState<number | undefined>();
    const left =
        (shark_index === 0 || shark_index === undefined) ? null : () => set_shark_index(shark_index! - 1);
    const right =
        (shark_index === sharks.length || shark_index === undefined)
            ? null
            : () => set_shark_index(shark_index! + 1);
    return (
        <>
            <Picker
                label="Shark Type"
                isRequired
                necessityIndicator="label"
                onSelectionChange={(id) => set_shark_index(sharks.findIndex(obj => obj.key == id))}
                selectedKey={shark_index != undefined ? sharks[shark_index].key : shark_index}
            >
                <Item key="great_white">Great White Shark</Item>
                <Item key="hammerhead">Hammerhead Shark</Item>
                {/* <Item key="mako">Mako Shark</Item>
                <Item key="blue">Blue Shark</Item>
                <Item key="seven_gill">Sevengill Shark</Item>
                <Item key="soup_fin">Soupfin (Tope or School) Shark</Item>
                <Item key="six_gill">Sixgill Shark</Item>
                <Item key="salmon">Salmon Shark</Item> */}
                {/* <Item key="none">None of the above</Item> */}
            </Picker>
            {shark_index != undefined
                ? SharkImageCarousel(sharks[shark_index], left, right)
                : null}
        </>
    );
};
