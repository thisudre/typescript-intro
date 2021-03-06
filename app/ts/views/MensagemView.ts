import { View } from './index';

export class MensagemView extends View<string> {
    template(mensagem: string): string {
        return `
            <p class="alert alert-success" role="alert">${mensagem}</p>
        `
    }
}