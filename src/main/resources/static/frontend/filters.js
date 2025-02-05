// Опции для комбо-боксов
const filterOptions = {
    exterior: [
        { value: "All", text: "Exteriors" },
        { value: "Factory New", text: "Factory New" },
        { value: "Minimal Wear", text: "Minimal Wear" },
        { value: "Field-Tested", text: "Field-Tested" },
        { value: "Well-Worn", text: "Well-Worn" },
        { value: "Battle-Scarred", text: "Battle-Scarred" }
    ],
    gun: [
        { value: "all", text: "Gun" },
        { value: "Galil AR", text: "Galil AR" },
        { value: "AK-47", text: "AK-47" },
        { value: "AUG", text: "AUG" },
        { value: "FAMAS", text: "FAMAS" },
        { value: "M4A1-S", text: "M4A1-S" },
        { value: "M4A4", text: "M4A4" },
        { value: "SG 553", text: "SG 553" },
        { value: "CZ75-Auto", text: "CZ75-Auto" },
        { value: "Desert Eagle", text: "Desert Eagle" },
        { value: "Dual Berettas", text: "Dual Berettas" },
        { value: "Five-SeveN", text: "Five-SeveN" },
        { value: "Glock-18", text: "Glock-18" },
        { value: "P2000", text: "P2000" },
        { value: "P250", text: "P250" },
        { value: "R8 Revolver", text: "R8 Revolver" },
        { value: "Tec-9", text: "Tec-9" },
        { value: "USP-S", text: "USP-S" },
        { value: "Bayonet", text: "Bayonet" },
        { value: "Bowie Knife", text: "Bowie Knife" },
        { value: "Butterfly Knife", text: "Butterfly Knife" },
        { value: "Classic Knife", text: "Classic Knife" },
        { value: "Falchion Knife", text: "Falchion Knife" },
        { value: "Flip Knife", text: "Flip Knife" },
        { value: "Gut Knife", text: "Gut Knife" },
        { value: "Huntsman Knife", text: "Huntsman Knife" },
        { value: "Karambit", text: "Karambit" },
        { value: "Kukri Knife", text: "Kukri Knife" },
        { value: "M9 Bayonet", text: "M9 Bayonet" },
        { value: "Navaja Knife", text: "Navaja Knife" },
        { value: "Nomad Knife", text: "Nomad Knife" },
        { value: "Paracord Knife", text: "Paracord Knife" },
        { value: "Shadow Daggers", text: "Shadow Daggers" },
        { value: "Skeleton Knife", text: "Skeleton Knife" },
        { value: "Stiletto Knife", text: "Stiletto Knife" },
        { value: "Survival Knife", text: "Survival Knife" },
        { value: "Talon Knife", text: "Talon Knife" },
        { value: "Ursus Knife", text: "Ursus Knife" },
        { value: "AWP", text: "AWP" },
        { value: "G3SG1", text: "G3SG1" },
        { value: "SCAR-20", text: "SCAR-20" },
        { value: "SSG 08", text: "SSG 08" },
        { value: "MAC-10", text: "MAC-10" },
        { value: "MP5-SD", text: "MP5-SD" },
        { value: "MP7", text: "MP7" },
        { value: "MP9", text: "MP9" },
        { value: "P90", text: "P90" },
        { value: "PP-Bizon", text: "PP-Bizon" },
        { value: "UMP-45", text: "UMP-45" },
        { value: "MAG-7", text: "MAG-7" },
        { value: "Nova", text: "Nova" },
        { value: "Sawed-Off", text: "Sawed-Off" },
        { value: "XM1014", text: "XM1014" },
        { value: "M249", text: "M249" },
        { value: "Negev", text: "Negev" },
        { value: "Bloodhound Gloves", text: "Bloodhound Gloves" },
        { value: "Broken Fang Gloves", text: "Broken Fang Gloves" },
        { value: "Driver Gloves", text: "Driver Gloves" },
        { value: "Hand Wraps", text: "Hand Wraps" },
        { value: "Hydra Gloves", text: "Hydra Gloves" },
        { value: "Moto Gloves", text: "Moto Gloves" },
        { value: "Specialist Gloves", text: "Specialist Gloves" },
        { value: "Sport Gloves", text: "Sport Gloves" },
        { value: "Zeus x27", text: "Zeus x27" }
    ],
    quality: [
        { value: "All", text: "Quality" },
        { value: "Consumer Grade", text: "Consumer Grade" },
        { value: "Industrial Grade", text: "Industrial Grade" },
        { value: "Mil-Spec Grade", text: "Mil-Spec Grade" },
        { value: "Restricted", text: "Restricted" },
        { value: "Classified", text: "Classified" },
        { value: "Covert", text: "Covert" },
        { value: "Extraordinary", text: "Extraordinary" },
        { value: "Remarkable", text: "Remarkable" },
        { value: "High Grade", text: "High Grade" },
        { value: "Base Grade", text: "Base Grade" },
        { value: "Exotic", text: "Exotic" },
        { value: "Superior", text: "Superior" }
    ],
    type: [
        { value: "All", text: "Type" },
        { value: "Agent", text: "Agent" },
        { value: "Charm", text: "Charm" },
        { value: "Rifle", text: "Rifle" },
        { value: "Graffiti", text: "Graffiti" },
        { value: "Shotgun", text: "Shotgun" },
        { value: "Tool", text: "Tool" },
        { value: "Container", text: "Container" },
        { value: "Music Kit", text: "Music Kit" },
        { value: "Sticker", text: "Sticker" },
        { value: "Patch", text: "Patch" },
        { value: "Knife", text: "Knife" },
        { value: "Gloves", text: "Gloves" },
        { value: "Pistol", text: "Pistol" },
        { value: "SMG", text: "SMG" },
        { value: "Gift", text: "Gift" },
        { value: "Pass", text: "Pass" },
        { value: "Machinegun", text: "Machinegun" },
        { value: "Sniper Rifle", text: "Sniper Rifle" },
        { value: "Equipment", text: "Equipment" },
        { value: "Souvenir", text: "Souvenir" },
        { value: "Tag", text: "Tag" }
    ]
};

// Функция для заполнения select-элементов
function populateSelect(id, options) {
    const select = document.getElementById(id);
    if (select) {
        select.innerHTML = ""; // Очищаем текущие опции
        options.forEach(option => {
            const opt = document.createElement("option");
            opt.value = option.value;
            opt.textContent = option.text;
            select.appendChild(opt);
        });
    }
}

// Заполняем все select-элементы
document.addEventListener("DOMContentLoaded", () => {
    populateSelect("exterior-filter", filterOptions.exterior);
    populateSelect("gun-filter", filterOptions.gun);
    populateSelect("quality-filter", filterOptions.quality);
    populateSelect("type-filter", filterOptions.type);
});
