
'use client';
import React, { useEffect, useState } from "react";
import { Package, MapPin, Calendar, CreditCard, Phone, User, Filter, Search, Eye } from "lucide-react";

const Orders = () => {
    const currency = "€";
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('Tous');

    // Données de démonstration
    const orderDummyData = [
        {
            _id: "ORD001",
            amount: 1249.99,
            date: "2024-01-15",
            status: "En préparation",
            paymentMethod: "Carte bancaire",
            paymentStatus: "Payé",
            items: [
                {
                    product: { name: "iPhone 15 Pro Max 256GB" },
                    quantity: 1
                }
            ],
            address: {
                fullName: "Jean Dupont",
                area: "15 Rue de la Paix",
                city: "Paris",
                state: "Île-de-France",
                phoneNumber: "+33 1 23 45 67 89"
            }
        },
        {
            _id: "ORD002",
            amount: 579.98,
            date: "2024-01-14",
            status: "Expédiée",
            paymentMethod: "PayPal",
            paymentStatus: "Payé",
            items: [
                {
                    product: { name: "AirPods Pro 2ème génération" },
                    quantity: 2
                }
            ],
            address: {
                fullName: "Marie Martin",
                area: "42 Avenue des Champs-Élysées",
                city: "Paris",
                state: "Île-de-France",
                phoneNumber: "+33 1 98 76 54 32"
            }
        },
        {
            _id: "ORD003",
            amount: 2299.99,
            date: "2024-01-13",
            status: "Livrée",
            paymentMethod: "Virement",
            paymentStatus: "Payé",
            items: [
                {
                    product: { name: "MacBook Pro 14\" M3 Pro" },
                    quantity: 1
                }
            ],
            address: {
                fullName: "Pierre Lambert",
                area: "8 Rue du Commerce",
                city: "Lyon",
                state: "Auvergne-Rhône-Alpes",
                phoneNumber: "+33 4 12 34 56 78"
            }
        },
        {
            _id: "ORD004",
            amount: 129.99,
            date: "2024-01-12",
            status: "Annulée",
            paymentMethod: "Espèces à la livraison",
            paymentStatus: "En attente",
            items: [
                {
                    product: { name: "Chargeur USB-C MagSafe" },
                    quantity: 1
                },
                {
                    product: { name: "Coque iPhone transparente" },
                    quantity: 2
                }
            ],
            address: {
                fullName: "Sophie Dubois",
                area: "23 Boulevard Saint-Germain",
                city: "Marseille",
                state: "Provence-Alpes-Côte d'Azur",
                phoneNumber: "+33 4 91 23 45 67"
            }
        }
    ];

    const fetchSellerOrders = async () => {
        setTimeout(() => {
            setOrders(orderDummyData);
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        fetchSellerOrders();
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'En préparation':
                return 'bg-yellow-100 text-yellow-800';
            case 'Expédiée':
                return 'bg-blue-100 text-blue-800';
            case 'Livrée':
                return 'bg-green-100 text-green-800';
            case 'Annulée':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getPaymentStatusColor = (status) => {
        switch (status) {
            case 'Payé':
                return 'bg-green-100 text-green-800';
            case 'En attente':
                return 'bg-yellow-100 text-yellow-800';
            case 'Échoué':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const filteredOrders = orders.filter(order => {
        const matchesSearch = order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            order.address.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            order.items.some(item => item.product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesStatus = statusFilter === 'Tous' || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const statusOptions = ['Tous', ...new Set(orders.map(order => order.status))];

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F6F7EC' }}>
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200" 
                         style={{ borderTopColor: '#E16939' }}></div>
                    <p style={{ color: '#131837' }}>Chargement des commandes...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#F6F7EC' }}>
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* En-tête */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl" style={{ backgroundColor: '#E16939' }}>
                            <Package className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold" style={{ color: '#131837' }}>
                                Mes Commandes
                            </h1>
                            <p className="opacity-70 mt-1" style={{ color: '#131837' }}>
                                {orders.length} commande{orders.length > 1 ? 's' : ''} au total
                            </p>
                        </div>
                    </div>

                    {/* Barre de recherche et filtres */}
                    <div className="flex flex-col sm:flex-row gap-4 bg-white p-6 rounded-2xl shadow-sm">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" 
                                    style={{ color: '#131837' }} />
                            <input
                                type="text"
                                placeholder="Rechercher par ID, client ou produit..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition-colors"
                                style={{ color: '#131837' }}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" 
                                    style={{ color: '#131837' }} />
                            <select
                                className="pl-12 pr-8 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500 transition-colors min-w-48"
                                style={{ color: '#131837' }}
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                {statusOptions.map(status => (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Liste des commandes */}
                <div className="space-y-6">
                    {filteredOrders.length === 0 ? (
                        <div className="bg-white rounded-2xl shadow-sm p-16 text-center">
                            <Package className="w-16 h-16 mx-auto mb-4 opacity-30" style={{ color: '#131837' }} />
                            <h3 className="text-xl font-semibold mb-2" style={{ color: '#131837' }}>
                                Aucune commande trouvée
                            </h3>
                            <p className="opacity-60" style={{ color: '#131837' }}>
                                Essayez de modifier vos critères de recherche
                            </p>
                        </div>
                    ) : (
                        filteredOrders.map((order, index) => (
                            <div key={order._id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                                {/* En-tête de commande */}
                                <div className="p-6 border-b border-gray-100" style={{ backgroundColor: '#F6F7EC' }}>
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 rounded-lg bg-white">
                                                <Package className="w-6 h-6" style={{ color: '#E16939' }} />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg" style={{ color: '#131837' }}>
                                                    Commande #{order._id}
                                                </h3>
                                                <p className="opacity-60 text-sm" style={{ color: '#131837' }}>
                                                    {order.items.length} article{order.items.length > 1 ? 's' : ''}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                                                {order.status}
                                            </span>
                                            <span className="text-2xl font-bold" style={{ color: '#E16939' }}>
                                                {currency}{order.amount.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Contenu de commande */}
                                <div className="p-6">
                                    <div className="grid md:grid-cols-3 gap-6">
                                        {/* Produits */}
                                        <div className="md:col-span-1">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Package className="w-4 h-4" style={{ color: '#131837' }} />
                                                <h4 className="font-medium" style={{ color: '#131837' }}>
                                                    Produits
                                                </h4>
                                            </div>
                                            <div className="space-y-2">
                                                {order.items.map((item, idx) => (
                                                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg" 
                                                         style={{ backgroundColor: '#F6F7EC' }}>
                                                        <span className="text-sm font-medium truncate" style={{ color: '#131837' }}>
                                                            {item.product.name}
                                                        </span>
                                                        <span className="text-sm font-semibold ml-2" style={{ color: '#E16939' }}>
                                                            x{item.quantity}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Adresse de livraison */}
                                        <div className="md:col-span-1">
                                            <div className="flex items-center gap-2 mb-3">
                                                <MapPin className="w-4 h-4" style={{ color: '#131837' }} />
                                                <h4 className="font-medium" style={{ color: '#131837' }}>
                                                    Livraison
                                                </h4>
                                            </div>
                                            <div className="space-y-2 text-sm" style={{ color: '#131837' }}>
                                                <div className="flex items-center gap-2">
                                                    <User className="w-3 h-3 opacity-50" />
                                                    <span className="font-medium">{order.address.fullName}</span>
                                                </div>
                                                <p className="opacity-70 ml-5">
                                                    {order.address.area}<br />
                                                    {order.address.city}, {order.address.state}
                                                </p>
                                                <div className="flex items-center gap-2 ml-5">
                                                    <Phone className="w-3 h-3 opacity-50" />
                                                    <span className="opacity-70">{order.address.phoneNumber}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Informations de paiement */}
                                        <div className="md:col-span-1">
                                            <div className="flex items-center gap-2 mb-3">
                                                <CreditCard className="w-4 h-4" style={{ color: '#131837' }} />
                                                <h4 className="font-medium" style={{ color: '#131837' }}>
                                                    Paiement
                                                </h4>
                                            </div>
                                            <div className="space-y-3 text-sm">
                                                <div className="flex items-center justify-between">
                                                    <span className="opacity-70" style={{ color: '#131837' }}>
                                                        Méthode
                                                    </span>
                                                    <span className="font-medium" style={{ color: '#131837' }}>
                                                        {order.paymentMethod}
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="opacity-70" style={{ color: '#131837' }}>
                                                        Statut
                                                    </span>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(order.paymentStatus)}`}>
                                                        {order.paymentStatus}
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="opacity-70" style={{ color: '#131837' }}>
                                                        Date
                                                    </span>
                                                    <span className="font-medium" style={{ color: '#131837' }}>
                                                        {new Date(order.date).toLocaleDateString('fr-FR')}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex justify-end pt-4 border-t border-gray-100 mt-6">
                                        <button className="flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-white"
                                                style={{ backgroundColor: '#E16939' }}>
                                            <Eye className="w-4 h-4" />
                                            Voir détails
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Statistiques */}
                {filteredOrders.length > 0 && (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg" style={{ backgroundColor: '#E16939', opacity: 0.1 }}>
                                    <Package className="w-5 h-5" style={{ color: '#E16939' }} />
                                </div>
                                <div>
                                    <p className="text-sm opacity-60" style={{ color: '#131837' }}>
                                        Total Commandes
                                    </p>
                                    <p className="text-2xl font-bold" style={{ color: '#131837' }}>
                                        {orders.length}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-green-100">
                                    <Package className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm opacity-60" style={{ color: '#131837' }}>
                                        Livrées
                                    </p>
                                    <p className="text-2xl font-bold" style={{ color: '#131837' }}>
                                        {orders.filter(o => o.status === 'Livrée').length}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-blue-100">
                                    <Package className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm opacity-60" style={{ color: '#131837' }}>
                                        En cours
                                    </p>
                                    <p className="text-2xl font-bold" style={{ color: '#131837' }}>
                                        {orders.filter(o => o.status === 'En préparation' || o.status === 'Expédiée').length}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg" style={{ backgroundColor: '#E16939', opacity: 0.1 }}>
                                    <CreditCard className="w-5 h-5" style={{ color: '#E16939' }} />
                                </div>
                                <div>
                                    <p className="text-sm opacity-60" style={{ color: '#131837' }}>
                                        Chiffre d'Affaires
                                    </p>
                                    <p className="text-2xl font-bold" style={{ color: '#131837' }}>
                                        {orders.reduce((total, order) => total + order.amount, 0).toFixed(0)} €
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;