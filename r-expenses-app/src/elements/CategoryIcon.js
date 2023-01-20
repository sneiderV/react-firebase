import React from 'react';
import { ReactComponent as FoodIcon } from "./../assets/images/cat_comida.svg";
import { ReactComponent as BillsPaymentsIcon } from "./../assets/images/cat_cuentas-y-pagos.svg";
import { ReactComponent as HomeIcon } from "./../assets/images/cat_hogar.svg";
import { ReactComponent as TransportationIcon } from "./../assets/images/cat_transporte.svg";
import { ReactComponent as ClothingIcon } from "./../assets/images/cat_ropa.svg";
import { ReactComponent as HealthHygieneIcon } from "./../assets/images/cat_salud-e-higiene.svg";
import { ReactComponent as ShoppingIcon } from "./../assets/images/cat_compras.svg";
import { ReactComponent as FunIcon } from "./../assets/images/cat_diversion.svg";

const CategoryIcon = ({ id }) => {
    switch (id) {
        case 'food':
            return <FoodIcon />;
        case 'bills and payments':
            return <BillsPaymentsIcon />;
        case 'home':
            return <HomeIcon />;
        case 'transportation':
            return <TransportationIcon />;
        case 'clothing':
            return <ClothingIcon />;
        case 'health and hygiene':
            return <HealthHygieneIcon />;
        case 'shopping':
            return <ShoppingIcon />;
        case 'fun':
            return <FunIcon />;

        default:
            break;
    }
}

export default CategoryIcon;