import { StyleSheet, View, Text, Button } from "react-native";
import { Stack } from "expo-router";
import { getHtmlTemplate, print } from "../utils";

export default function Page() {
  const itemList = [
    {
      name: "薯片",
      number: 10,
      price: 16,
      totalPrice: 160,
    },
    {
      name: "可乐",
      number: 3,
      price: 16,
      totalPrice: 48,
    },
  ];

  const handlePrint = (toFile) => {
    print(getHtmlTemplate(itemList), toFile);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "打印",
        }}
      />
      <View style={styles.list}>
        <View style={styles.item}>
          <Text style={{ ...styles.itemTitle, marginRight: "30" }}>
            产品名称
          </Text>
          <Text style={styles.itemTitle}>数量</Text>
          <Text style={styles.itemTitle}>单价</Text>
          <Text style={styles.itemTitle}>总价</Text>
        </View>
        {itemList.map((item, index) => (
          <View style={styles.item} key={item.name}>
            <Text style={{ ...styles.itemTitle, marginRight: "30" }}>
              {item.name}
            </Text>
            <Text style={styles.itemTitle}>{item.number}</Text>
            <Text style={styles.itemTitle}>{item.price}</Text>
            <Text style={styles.itemTitle}>{item.totalPrice}</Text>
          </View>
        ))}
        <View style={styles.spacer}></View>
        <Button title="打印" onPress={handlePrint.bind(this, false)}></Button>
        <View style={styles.spacer}></View>
        <Button
          title="打印并转为pdf文件"
          onPress={handlePrint.bind(this, true)}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 8,
    flex: 1,
  },
  spacer: {
    height: 18,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 30,
    paddingBottom: 0,
  },
  itemTitle: {
    fontWeight: "bold",
  },
});
