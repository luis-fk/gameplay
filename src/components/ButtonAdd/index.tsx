import React from "react";
import { RectButton, RectButtonProps, GestureHandlerRootView } from "react-native-gesture-handler";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from "../../global/styles/theme";

export function ButtonAdd({...rest} : RectButtonProps) {
    return(
        <GestureHandlerRootView>
            <RectButton 
                style={styles.container}
            >
                <MaterialCommunityIcons 
                    name="plus"
                    color={theme.colors.heading}
                    size={24}
                />
            </RectButton>
        </GestureHandlerRootView>
        
    );
}