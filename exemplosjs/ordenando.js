
const swap = (vetor, i, j) => {
    const temp = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temp;
};


const shuffle = (vetor, trocas) => {
    for (let i = 0; i < trocas; i++) {
        const pos1 = Math.floor(Math.random() * vetor.length);
        const pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};

const bubble_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }
    return vetor;
};


const selection_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[minIndex]) {
                minIndex = j;
            }
        }
        swap(vetor, i, minIndex);
    }
    return vetor;
};


const particionamento = (vetor, low, high) => {
    const pivot = vetor[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (vetor[j] < pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, high);
    return i + 1;
};


const quick_sort = (vetor, low, high) => {
    if (low < high) {
        const pi = particionamento(vetor, low, high);
        quick_sort(vetor, low, pi - 1);
        quick_sort(vetor, pi + 1, high);
    }
    return vetor;
};
