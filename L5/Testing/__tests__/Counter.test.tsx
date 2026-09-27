import Counter from "../src/components/Counter";
import { render, fireEvent } from "@testing-library/react-native";

describe(Counter, () => {
    test("Counter displays correct initial count", async () => {
        const { getByTestId } = await render(<Counter initialCount={0}/>);
        const countValue = Number(getByTestId("count").children.toString());
        expect(countValue).toEqual(0);
    });
    test("Counter increments by 1 after increase-button is pressed", async () => {
        const { getByTestId, getByText } = await render(<Counter initialCount={0}/>);
        const incrementButton = getByText("Increment");
        const countValue1 = Number(getByTestId("count").children.toString());
        expect(countValue1).toEqual(0);

        await fireEvent.press(incrementButton);
        const countValue2 = Number(getByTestId("count").children.toString());
        expect(countValue2).toEqual(1);

    });
    test("Counter decrements by 1 after decrease-button is pressed", async () => {
        const { getByTestId, getByText } = await render(<Counter initialCount={0}/>);
        const decrementBtn = getByText("Decrement");
        const countValue1 = Number(getByTestId("count").children.toString());
        expect(countValue1).toEqual(0);

        await fireEvent.press(decrementBtn);
        const countValue2 = Number(getByTestId("count").children.toString());
        expect(countValue2).toEqual(-1);
    });
    test("Counter resets after reset-button is pressed", async () => {
        const { getByTestId, getByText } = await render(<Counter initialCount={5}/>);
        const resetBtn = getByText("Reset");
        const countValue1 = Number(getByTestId("count").children.toString());
        expect(countValue1).toEqual(5);

        await fireEvent.press(resetBtn);
        const countValue2 = Number(getByTestId("count").children.toString());
        expect(countValue2).toEqual(0);
    });
    test("Counter switches signs after switch-sign-button is pressed", async () => {
        const { getByTestId, getByText } = await render(<Counter initialCount={5}/>);
        const switchBtn = getByText("Switch sign");
        const countValue1 = Number(getByTestId("count").children.toString());
        expect(countValue1).toEqual(5);

        await fireEvent.press(switchBtn);
        const countValue2 = Number(getByTestId("count").children.toString());
        expect(countValue2).toEqual(-5);
    });
});