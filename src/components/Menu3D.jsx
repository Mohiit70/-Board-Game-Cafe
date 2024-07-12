import React from 'react';

const Menu3D = () => {
    return (
        <section id="menu3d">
            <h2>Our Menu</h2>
            <div className="menu-items">
                {/* Coffee */}
                <div className="menu-category">
                    <h3>Coffee</h3>
                    <div className="menu-item">
                        <img src="https://static.wixstatic.com/media/3683c8_7ef4b6074f684df58297a9846b047841~mv2.jpg/v1/fill/w_792,h_593,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3683c8_7ef4b6074f684df58297a9846b047841~mv2.jpg" alt="Coffee" />
                        <div className="menu-details">
                            <p>LATTE</p>
                            <p>$4.75 (H) / $5.25 (C)</p>
                        </div>
                    </div>
                    <div className="menu-item">
                        <img src="https://static.wixstatic.com/media/3683c8_7ef4b6074f684df58297a9846b047841~mv2.jpg/v1/fill/w_792,h_593,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3683c8_7ef4b6074f684df58297a9846b047841~mv2.jpg" alt="Coffee" />
                        <div className="menu-details">
                            <p>CORTADO</p>
                            <p>$4.25 (H) / $4.75 (C)</p>
                        </div>
                    </div>
                </div>

                {/* Specialty Drinks */}
                <div className="menu-category">
                    <h3>Specialty Drinks</h3>
                    <div className="menu-item">
                        <img src="https://static.wixstatic.com/media/3683c8_3704f0a4aac64333a0d6d74adaaef56a~mv2.jpg/v1/fill/w_792,h_641,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3683c8_3704f0a4aac64333a0d6d74adaaef56a~mv2.jpg" alt="Specialty Drink" />
                        <div className="menu-details">
                            <p>MATCHA LATTE</p>
                            <p>$5.25 (H) / $5.75 (C)</p>
                        </div>
                    </div>
                    <div className="menu-item">
                        <img src="https://static.wixstatic.com/media/3683c8_3704f0a4aac64333a0d6d74adaaef56a~mv2.jpg/v1/fill/w_792,h_641,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3683c8_3704f0a4aac64333a0d6d74adaaef56a~mv2.jpg" alt="Specialty Drink" />
                        <div className="menu-details">
                            <p>HOT CHOCOLATE</p>
                            <p>$4.50 (H) / S'mores: $5.50</p>
                        </div>
                    </div>
                </div>

                {/* Boba */}
                <div className="menu-category">
                    <h3>Boba</h3>
                    <div className="menu-item">
                        <img src="https://static.wixstatic.com/media/3683c8_48d8140c11a848e9874e1ddc0114e8d3~mv2.jpg/v1/fill/w_683,h_736,al_c,q_85,enc_auto/3683c8_48d8140c11a848e9874e1ddc0114e8d3~mv2.jpg" alt="Boba" />
                        <div className="menu-details">
                            <p>THE OG</p>
                            <p>Medium: $4.25 | Large: $5.25 | Hot: $5.25</p>
                            <p>Classic milk tea</p>
                        </div>
                    </div>
                    <div className="menu-item">
                        <img src="https://static.wixstatic.com/media/3683c8_48d8140c11a848e9874e1ddc0114e8d3~mv2.jpg/v1/fill/w_683,h_736,al_c,q_85,enc_auto/3683c8_48d8140c11a848e9874e1ddc0114e8d3~mv2.jpg" alt="Boba" />
                        <div className="menu-details">
                            <p>BROWN SUGAR BOBA</p>
                            <p>Medium: $4.75 | Large: $5.75 | Hot: $5.75</p>
                            <p>Caffeine free</p>
                        </div>
                    </div>
                </div>

                {/* Hot Bites */}
                <div className="menu-category">
                    <h3>Hot Bites</h3>
                    <div className="menu-item">
                        <img src="https://static.wixstatic.com/media/3683c8_2bc473acef06413a9146b80858d03c23~mv2.jpg/v1/fill/w_504,h_394,al_c,lg_1,q_80,enc_auto/3683c8_2bc473acef06413a9146b80858d03c23~mv2.jpg" alt="Hot Bites" />
                        <div className="menu-details">
                            <p>CHICKEN POPPERS</p>
                            <p>$6.00</p>
                        </div>
                    </div>
                    <div className="menu-item">
                        <img src="https://static.wixstatic.com/media/3683c8_2bc473acef06413a9146b80858d03c23~mv2.jpg/v1/fill/w_504,h_394,al_c,lg_1,q_80,enc_auto/3683c8_2bc473acef06413a9146b80858d03c23~mv2.jpg" alt="Hot Bites" />
                        <div className="menu-details">
                            <p>MOZZ STICKS</p>
                            <p>$7.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu3D;
