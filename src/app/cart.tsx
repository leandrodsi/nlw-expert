import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { LinkButton } from "@/components/link-button";
import { Product } from "@/components/product";
import { ProductCartProps, useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Alert, Linking, ScrollView, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const PHONE_NUMBER = "351933968325";

export default function Card() {
  const cartStore = useCartStore();
  const navigation = useNavigation();

  const [address, setAddress] = useState("");

  const total = formatCurrency(
    cartStore.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    ),
  );

  function handleProductRemove(product: ProductCartProps) {
    Alert.alert(
      "Remove",
      `Do you want to remove ${product.title} from the cart?`,
      [
        {
          text: "Cancel",
        },
        { text: "Remove", onPress: () => cartStore.remove(product.id) },
      ],
    );
  }

  function handleOrder() {
    if (address.trim().length === 0) {
      return Alert.alert("Order", "Enter delivery details");
    }

    const products = cartStore.products
      .map((product) => `\n ${product.quantity} ${product.title}`)
      .join("");

    const message = `🍔 NEW ORDER:
    \n Delivery to: ${address}

    ${products}

    \n Total amount: ${total}
    `;

    Linking.openURL(
      `http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`,
    );
    cartStore.clear();
    navigation.goBack();
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Your cart" />

      <KeyboardAwareScrollView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="p-5 flex-1">
            {cartStore.products.length > 0 ? (
              <>
                <View className="border-b border-slate-700">
                  {cartStore.products.map((product) => (
                    <Product
                      key={product.id}
                      data={product}
                      onPress={() => handleProductRemove(product)}
                    />
                  ))}
                </View>
                <View className="flex-row gap-2 items-center mt-5 mb-4">
                  <Text className="text-white text-xl font-subtitle">
                    Total:
                  </Text>

                  <Text className="text-lime-400 text-2xl font-heading">
                    {total}
                  </Text>
                </View>

                <Input
                  onChangeText={setAddress}
                  placeholder="Please provide the delivery address including street, neighborhood, ZIP code, number, and additional information (if applicable)..."
                  onSubmitEditing={handleOrder}
                  blurOnSubmit
                />
              </>
            ) : (
              <Text className="font-body text-slate-400 text-center my-8">
                Your cart is empty.
              </Text>
            )}
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>

      <View className="p-5 gap-5">
        <Button onPress={handleOrder}>
          <Button.Text>Submit order</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>

        <LinkButton title="Back to menu" href="/" />
      </View>
    </View>
  );
}
