import React from "react";
import { Box, Heading, TableContainer, Table, Tbody, Tr, Th, Td, VStack, Flex } from "@chakra-ui/react";

const soldItems = [
  { id: 1, color: "ピンク", quantity: 41, stock: 22 },
  { id: 2, color: "ブラック", quantity: 33, stock: 43 },
  { id: 3, color: "ホワイト", quantity: 23, stock: 11 },
  { id: 3, color: "イエロー", stock: 11 },
];

const date = "2022/5/6";
const sum = 584297;
const consumptionRate = 54;
const recoupAchievementRate = 90;
const quantityToRecoup = -5;

export const SalesCondition: React.FC = () => {
  return (
    <Box w="90%" borderColor="#707070" borderWidth="1px" m="auto" maxW="1680px">
      <Heading as="h2" size="xl">
        ＜販売状況＞
      </Heading>
      <TableContainer>
        <Table variant="" fontSize="36px">
          <Tbody>
            <Tr>
              <Td verticalAlign="text-top" fontSize="36px">
                販売開始日
              </Td>
              <Td>{date}</Td>
            </Tr>
            <Tr>
              <Td verticalAlign="text-top" fontSize="36px">
                売上金額
              </Td>
              <Td>{`¥${sum.toLocaleString()}（税込）`}</Td>
            </Tr>
            <Tr>
              <Td verticalAlign="text-top" fontSize="36px">
                売上枚数
              </Td>
              <Td>
                {soldItems.map((item: any) => {
                  return (
                    <Tr key={item.id}>
                      <Td px="0">{item.color}</Td>
                    </Tr>
                  );
                })}
              </Td>
              <Td>
                {soldItems.map((item: any) => {
                  return (
                    <Tr key={item.id}>
                      <Td px="0" isNumeric>{item.quantity}</Td>
                    </Tr>
                  );
                })}
              </Td>
            </Tr>
            <Tr>
              <Td verticalAlign="text-top" fontSize="36px">
                在庫数
              </Td>
              <Td>
                {soldItems.map((item: any) => {
                  return (
                    <Tr key={item.id}>
                      <Td px="0">{item.color}</Td>
                    </Tr>
                  );
                })}
              </Td>
              <Td>
                {soldItems.map((item: any) => {
                  return (
                    <Tr key={item.id}>
                      <Td px="0">{item.stock}</Td>
                    </Tr>
                  );
                })}
              </Td>
            </Tr>
            <Tr>
              <Td verticalAlign="text-top" fontSize="36px">
                消化率
              </Td>
              <Td>{`${consumptionRate}%`}</Td>
            </Tr>
            <Tr>
              <Td verticalAlign="text-top" fontSize="36px">
                リクープ達成率
              </Td>
              <Td>{`${recoupAchievementRate}%`}</Td>
            </Tr>
            <Tr>
              <Td verticalAlign="text-top" fontSize="36px">
                リクープまでの枚数
              </Td>
              <Td>{quantityToRecoup}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
