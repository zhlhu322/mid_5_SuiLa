import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView, Box, Text} from "@gluestack-ui/themed";


const TOSScreen = ()=>{
    return(
        <ScrollView style={styles.scrollview}>
            <Box style={{ alignItems: 'center', marginVertical: 15 }}>
                <Text style={{ fontSize: 16, color: "black" ,marginBottom:10 }}>隱私權/服務條款</Text>
            </Box>
            <Box style={{paddingHorizontal:15}}>
                <Text style={{fontSize:14}}>
                    本商家致力於遵守保護個人資料的相關法令及本公司隱私保護政策，妥善管理和保護用戶的隱私權。
                    
                    1. 本商家以合法公正的方法取得個人資料。
                    2. 本商家依照法律告知蒐集目的，除法律另有規定外，本商家僅在下述蒐集目的範圍内使用個人資料。
                    3. 本商家採取必要且適當的措施以安全管理取得之個人資料。
                    4. 除下述告知範圍或法律另有規定外，本商家不會將個人資料提供給第三人。
                    5. 本商家在接獲顧客本人提出個人資料的確認、修正、停止使用、刪除等相關要求時，將會依法妥適處理。
                    6. 若您的會員帳號密碼遭到冒用，請聯絡本商家，商家將依照您的請求處理您的帳號。（如停止使用或刪除等相關要求）另本商家應於知悉您帳號密碼被冒用時，立即暫停該帳號所生交易之處理及後續利用。

                    當您於本網站輸入個人資料並開始使用本服務時，即視為您已清楚瞭解並同意以下本網站蒐集、處理或利用您個人資料之目的及用途。

                    個人資料權益告知：本商家依據個人資料保護法（以下稱「個資法」）第八條第一項規定，向您告知下列事項，敬請詳閱：

                    1. 蒐集之目的：本商家依下列特定目的，蒐集您的個人資料：     

                    ● 消費者、客戶管理與服務
                    ● 行銷
                    ● 資（通）訊與資料庫管理
                    ● 網路購物及其他電子商務服務
                    ● 為提供本商家商品或服務資訊
                    ● 為回覆您的詢問
                    ● 為提升本商家服務品質

                    2. 個人資料之類別：本商家將收集您的下列個人資料，以便提供服務：

                    ● 姓名、地址、電話、電子郵件地址等，足以辨識您的身分，以便提供服務的個人資料
                    ● 其他依法應蒐集之資料類別

                    3. 個人資料利用之期間、地區、對象及方式：

                    ● 期間：特定目的之存續期間，或依法、依約應予保留之保存年限（如：商業會計法等），以最晚屆至者為準。
                    ● 對象：本商家、業務委外單位、依法有調查權機關或金融監理機關。
                    ● 地區：中華民國境內。
                    ● 方式：以自動化機器或其他非自動化之利用方式。

                    4. 依據個資法第三條規定，您得就本人之個人資料，要求：

                    ● 查詢、閱覽或製給複製本，但應以書面向本商家提出請求。本商家應以書面通知請求人准駁之理由，並得酌收必要成本費用。
                    ● 補充或更正，但您必須為適當之釋明。本商家應以書面通知請求人准駁之理由。
                    ● 停止蒐集、處理或利用，或予以刪除，但本商家依法因執行業務所必須者，不在此限。
                    ● 委託代理人提供上開請求者，應提出相關委任文件供本商家確認及審核。
                    ● 不提供個人資料所致權益之影響：您得自由選擇是否提供個人資料，不過，倘若您拒絕提供必要之個人資料，可能會影響本公司提供有關之服務。
                </Text>
            </Box>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: "#F5F7F1",
        display: 'flex',
        flex: '1',
        flexDirection: 'column'
    },
})

export default TOSScreen;