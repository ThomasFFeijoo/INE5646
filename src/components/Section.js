import React from 'react';

const Section = () => (

    <div id="pagamento__content">

        <div id="content">

            <form id="payment" action="#" method="post" className="pagamento__payment form-inline">
                <fieldset className="payment-step content" data-omniture-section="Meios de pagamento">

                    <h3>Dados do Cartão de Crédito</h3>
                    <div className="creditCardFields">
                        <h5 className="obsText">Seu pagamento passará por uma análise interna e estará sujeito à
                            confirmação
                            feita por e-mail. O prazo de entrega será considerado somente após a confirmação
                            feita pela operadora. Você sempre será notificado, por e-mail, sobre qualquer alteração no
                            fluxo de processamento do seu pedido.</h5>

                        <div className="step" id="cardDataContainer" >
                            <input type="hidden" id="creditCardCode" value=""/>
                            <input type="hidden" id="creditCardBrand" name="creditCardBrand" value=""/>
                            <input type="hidden" name="creditCardToken" id="creditCardToken"/>
                            <input type="hidden" name="senderEmail" value=""/>

                            <div className="double-columns first-block">

                                <div id="ccBrandConsult" className="form-group pagamento__inline_inputs">
                                    <label htmlFor="creditCardNumber">Número do cartão</label><br/>
                                    <input className="form-control pagamento__bigger_input" data-title="Número do cartão"
                                           type="text" id="creditCardNumber" value="" maxLength="19"
                                           autoComplete="off"/><br/>
                                    <img
                                        src="https://d29i73yjyoycw7.cloudfront.net/site/images/bandeiras_assinatura.png"
                                        data-reactid=".0.1.0.1.0.0.0.1.0.1.1.0.0.2"/>
                                </div>

                                <div className="form-group cardDueDate pagamento__inline_inputs new_test1"
                                     >
                                    <label htmlFor="creditCardDueDate_Month">Data de validade</label><br/>
                                    <input className="form-control pagamento__smaller_input"
                                           data-title="Data de validade do cartão" type="text"
                                           data-autotab-target="creditCardDueDate_Year" placeholder="MM"
                                           maxLength="2" id="creditCardDueDate_Month"/>
                                    <input className="form-control pagamento__small_input small"
                                           data-title="Data de validade do cartão" type="text" placeholder="AAAA"
                                           maxLength="4" id="creditCardDueDate_Year"
                                    />
                                </div>
                                <br/>
                                <div className="form-group field cardHolderName  a pagamento__inline_inputs" >
                                    <label htmlFor="creditCardHolderName">
                                        Nome do dono do cartão
                                    </label><br/>
                                    <input placeholder="Ex.: CARLOS A F DE OLIVEIRA" data-title="Nome do dono do cartão"
                                           className="form-control pagamento__bigger_input" type="text"
                                           id="creditCardHolderName" name="creditCardHolderName"
                                           />
                                </div>
                                <div className="form-group cardCvv pagamento__inline_inputs new_test2">
                                    <label htmlFor="creditCardCVV">CVV</label><br/>
                                    <input data-title="Código de segurança do cartão"
                                           className="form-control pagamento__medium_input" type="text" id="creditCardCVV"
                                           value="" autoComplete="off"
                                    />
                                </div>
                                <br/>
                            </div>


                        </div>


                        <div className="step subcontent" id="cardHolderContainer">

                            <div id="cardHolderDataFields">
                                <div id="cardHolderData" className="holderData double-columns first-block">

                                    <div className="holderCPFField field  a pagamento__inline_inputs">
                                        <label htmlFor="holderCPF">
                                            CPF
                                        </label><br/>
                                        <input className="form-control pagamento__bigger_input" type="text" id="holderCPF"
                                               name="creditCardHolderCPF" value=""
                                               data-title="CPF do dono do cartão"
                                        />
                                    </div>
                                    <input type="hidden" name="holderCanEditPhone" value="true"/>


                                    <div className="holderBornDateField field  a pagamento__inline_inputs new_test3">
                                        <label htmlFor="holderBornDate">
                                            Data de nascimento
                                        </label><br/>
                                        <input placeholder="Ex.: 20/05/1980"
                                               className="form-control pagamento__medium_input" type="text"
                                               id="creditCardHolderBirthDate" name="creditCardHolderBirthDate" value=""
                                               data-title="Data de nascimento"
                                               maxLength="10"/>
                                    </div>
                                    <br/>
                                    <div className="holderPhoneField field pagamento__inline_inputs">
                                        <label htmlFor="holderAreaCode">
                                            Celular do dono do cartão
                                        </label><br/>

                                        <input className="form-control pagamento__smaller_input" type="text"
                                               data-autotab-target="holderPhone" maxLength="2" id="holderAreaCode"
                                               name="creditCardHolderAreaCode"
                                               value="" data-title="Celular do dono do cartão"/>
                                        <input className="form-control pagamento__big_input " type="text" maxLength="9"
                                               id="holderPhone" name="creditCardHolderPhone"
                                               value="" data-title="Celular do dono do cartão"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="field hide">
                                <input type="hidden" name="installmentQuantity" value="1"/>
                            </div>


                        </div>

                    </div>

                </fieldset>

                <fieldset id="cardBillingAddress" className="" data-omniture-section="Endereço para entrega">
                    <h3>Endereço de cobrança</h3>

                    <div className="informAddress">
                        <div className="incompleteAddress">
                            <div className="fillAddress">
                                <div className="postalCodeConsult form-group">
                                    <label htmlFor="shippingAddressPostalCode">CEP </label><br/>
                                    <input className="form-control medium addressPostalCode" data-title="CEP" data-editable=""
                                           id="cardBillingAddressPostalCode"
                                           name="cardBillingAddressPostalCode" value="" autoComplete="off"
                                           maxLength="8"/>
                                    <span
                                        className="pagseguro-button search-postal-code-button gray-theme">Buscar</span>
                                </div>
                                <br/><br/>
                                <div className="address-street-field form-group">
                                    <label htmlFor="shippingAddressStreet">Rua</label><br/>
                                    <input placeholder="Ex: Av. Brasil" className="form-control big addressStreet" data-title="Rua"
                                           data-editable="true"
                                           id="cardBillingAddressStreet"
                                           name="cardBillingAddressStreet" value="" maxLength="160"/>
                                </div>
                                <div className="address-complement-field showAlways form-group">
                                    <label htmlFor="shippingAddressComplement">Complemento <span>Opcional</span></label><br/>
                                    <input placeholder="Ex.: apartamento 73." className="form-control addressComplement"
                                           data-title="Complemento" data-editable="true"
                                           type="text" id="cardBillingAddressComplement"
                                           name="cardBillingAddressComplement" value=""
                                           maxLength="40" size="20"/>
                                </div>
                                <div className="address-number-field showAlways form-group">
                                    <label htmlFor="shippingAddressNumber">Número</label><br/>
                                    <input placeholder="Ex.: 1384." className="form-control pagamento__small_input addressNumber"
                                           data-title="Número" data-editable="true"
                                           type="text" id="cardBillingAddressNumber"
                                           name="cardBillingAddressNumber" value="" maxLength="20" size="10"/>
                                </div>
                                <br/>
                                <div className="address-district-field form-group">
                                    <label htmlFor="shippingAddressDistrict">Bairro</label><br/>
                                    <input placeholder="Ex: Centro" className="form-control medium addressDistrict" data-title="Bairro"
                                           data-editable="true" type="text" name="cardBillingAddressDistrict"
                                           id="cardBillingAddressDistrict"
                                           value=""
                                           maxLength="60"/>
                                </div>
                                <div className="address-city-field form-group">
                                    <label htmlFor="shippingAddressCity">Cidade</label><br/>
                                    <input placeholder="Ex: São Paulo" className="form-control medium addressCity" data-title="Cidade"
                                           data-editable="true" type="text"
                                           id="cardBillingAddressCity"
                                           name="cardBillingAddressCity" value="" maxLength="60"/>
                                </div>
                                <div className="address-state-field form-group">
                                    <label htmlFor="shippingAddressState">Estado</label><br/>
                                    <input placeholder="Ex: SP" className="form-control pagamento__small_input medium addressState" type="text"
                                           name="billingAddressState" id="billingAddressState"
                                           maxLength="2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="mainAction" className="content">
                        <p className="pagamento__inline_inputs new_test4">
                            <img className="new_test6"
                                 src="https://d29i73yjyoycw7.cloudfront.net/site/images/comodo_secure_seal_100x85_transp.png"
                                 alt="safe payment"/>
                        </p>
                        <button type="button" id="creditCardPaymentButton"
                                className="pagseguro-button mainActionButton btn btn-primary btn-lg">Confirmar o
                            pagamento
                        </button>


                        <div id="defaultLoader" className="loadBox">
                            <div className="uolMsg uolMsg-medium uolMsg-loading">
                                <h3>Processando. Aguarde...</h3>
                            </div>
                        </div>

                        <div id="progressLoader" className="loadBox">
                            <div id="progress-message" className="uolMsg uolMsg-medium uolMsg-loading ">
                                <h3>Processando o seu pagamento. Aguarde...</h3>
                            </div>
                            <div id="credicCardProgress">
                                <div className="bar">
                                    <div className="pct themeBgColor themeTextColor new_test5"
                                         data-progress="0"></div>
                                </div>
                                <p><strong className="rounded themeTextColor">0</strong></p>
                            </div>
                        </div>

                    </div>
                    <input type="hidden" name="shippingType" value="3"/>
                </fieldset>

            </form>

        </div>

    </div>
);

export default Section;